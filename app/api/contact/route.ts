import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Simple in-memory rate limiting (per-instance; for production scale, replace with a durable store)
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  submissionLog.set(ip, timestamps);
  return timestamps.length >= RATE_LIMIT_MAX;
}

function recordSubmission(ip: string) {
  const timestamps = submissionLog.get(ip) ?? [];
  timestamps.push(Date.now());
  submissionLog.set(ip, timestamps);
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the form for errors.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    recordSubmission(ip);

    // In production this would send an email (e.g. via Resend/SendGrid) and/or
    // write to a CRM/database. Logged server-side here so the endpoint is fully
    // functional end-to-end without requiring third-party credentials to demo.
    console.log("New consultation request:", {
      ...result.data,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thanks — we've received your request and will reach out within one business day.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
