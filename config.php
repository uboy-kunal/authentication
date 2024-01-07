<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error: " . $conn->connect_error);
} else {
    echo "Success";
}
?>
