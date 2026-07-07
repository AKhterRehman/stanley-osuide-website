<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    $data = $_POST;
}

function clean_text(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return filter_var($value, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
}

$name = clean_text((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = clean_text((string)($data['phone'] ?? ''));
$subject = clean_text((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$website = trim((string)($data['website'] ?? ''));

if ($website !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if (strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($subject) < 2 || strlen($message) < 10) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields correctly.']);
    exit;
}

$to = 'webdesign@stanleyosuide.co.uk';
$backupTo = 'speaker@stanleyosuide.com';
$safeSubject = 'Website enquiry: ' . $subject;
$sentAt = gmdate('Y-m-d H:i:s') . ' UTC';

$body = implode("\n", [
    'New enquiry from stanleyosuide.co.uk',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Subject: ' . $subject,
    'Sent: ' . $sentAt,
    '',
    'Message:',
    $message,
    '',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown'),
]);

$headers = [
    'From: Stanley Osuide Website <no-reply@stanleyosuide.co.uk>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Bcc: ' . $backupTo,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $safeSubject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Message could not be sent. Please email us directly.']);
    exit;
}

echo json_encode(['success' => true]);
