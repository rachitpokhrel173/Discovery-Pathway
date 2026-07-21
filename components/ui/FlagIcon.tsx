/**
 * Renders a real flag image instead of a Unicode flag emoji.
 *
 * Why: Windows does not render flag emoji (🇰🇷, 🇯🇵, etc.) as images —
 * it falls back to showing the plain two-letter country code text
 * ("KR", "JP"). macOS/iOS render them fine, which is why this only
 * shows up for some visitors. Using an actual image guarantees the
 * flag looks the same on every OS and browser.
 *
 * Uses flagcdn.com's free flag CDN (SVG, crisp at any size).
 */

interface FlagIconProps {
  countryCode: string; // ISO 3166-1 alpha-2, e.g. "kr", "jp"
  label?: string; // for alt text, e.g. "South Korea"
  className?: string; // controls size, e.g. "h-6 w-9" or "h-10 w-14"
}

export default function FlagIcon({ countryCode, label, className = "h-6 w-9" }: FlagIconProps) {
  return (
    <img
      src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
      alt={label ? `${label} flag` : `${countryCode.toUpperCase()} flag`}
      loading="lazy"
      className={`inline-block shrink-0 rounded-[3px] object-cover shadow-sm ring-1 ring-ink/10 ${className}`}
    />
  );
}
