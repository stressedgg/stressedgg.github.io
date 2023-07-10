<?php
// Handle signup form submission

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $plan = $_POST["plan"];
  
  // Save user information to the database
  // You would need to implement this part using a database and proper hashing/salting of passwords
  
  // Redirect user to appropriate page after successful registration
  header("Location: login.html");
}
?>
