<?php
// Handle login form submission

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $plan = $_POST["plan"];
  
  // Validate login credentials against database
  // You would need to implement this part using a database and proper hashing/salting of passwords
  
  // Simulate validation (replace with actual database validation)
  $validCredentials = true;
  
  // Redirect user to appropriate page based on authentication status and selected plan
  if ($validCredentials) {
    if ($plan == "free") {
      header("Location: videos-free.html");
    } elseif ($plan == "paid") {
      header("Location: videos-paid.html");
    }
  } else {
    // Invalid login credentials, display an error message
    // You can redirect the user back to the login page with an error message
    header("Location: index.html?error=1");
  }
}
?>
