<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

include '../config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || empty($data['email']) || empty($data['password'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Email and Password required"
    ]);
    exit;
}

$email = $data['email'];
$password = $data['password'];

$stmt = $conn->prepare("SELECT id, name, email, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode([
        "status" => "error",
        "message" => "User not found"
    ]);
    exit;
}

$user = $result->fetch_assoc();

if (password_verify($password, $user["password"])) {

    echo json_encode([
        "status" => "success",
        "message" => "Login successful",
        "user" => [
            "id" => $user["id"],
            "name" => $user["name"],
            "email" => $user["email"]
        ]
    ]);

} else {
    echo json_encode([
        "status" => "error",
        "message" => "Incorrect Password"
    ]);
}
