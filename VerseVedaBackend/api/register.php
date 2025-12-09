<?php
include "../config.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}


$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

// Validate
if (!$name || !$email || !$password) {
    echo json_encode(["status" => "error", "message" => "All fields required"]);
    exit;
}

// Password hash karna (safe tarika)
$hashed = password_hash($password, PASSWORD_BCRYPT);

// Insert into DB
$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $hashed);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "User registered successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Email already exists"]);
}
?>
