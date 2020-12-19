<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "to-do-list";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  exit();
}

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$sql = "INSERT INTO to_dos (title, date, done)
VALUES ('" . $_POST["title"] . "', '" . $_POST["date"] . "', 0)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
  http_response_code(500);
}

$conn->close();

?>