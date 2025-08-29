<?php
session_start();

// Example credentials (⚠️ Replace with DB in production)
$valid_user = "admin";
$valid_pass = "12345";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === $valid_user && $password === $valid_pass) {
        $_SESSION["loggedin"] = true;
        $_SESSION["username"] = $username;
        header("Location: admin-dashboard.php");
        exit();
    } else {
        $error = "Invalid username or password";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Login</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
    <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
    <?php if (!empty($error)): ?>
      <p class="text-red-500 text-center mb-4"><?= $error ?></p>
    <?php endif; ?>
    <form method="post" class="space-y-4">
      <input type="text" name="username" placeholder="Username" required
             class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      <input type="password" name="password" placeholder="Password" required
             class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      <button type="submit"
              class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>
    </form>
  </div>
</body>
</html>
