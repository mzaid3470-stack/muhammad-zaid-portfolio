<?php
/**
 * MUHAMMAD ZAID — PORTFOLIO CONTACT FORM HANDLER
 * Secure PHP Backend for Contact Processing
 */

header('Content-Type: application/json; charset=UTF-8');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'status' => 'error',
        'message' => 'Method not allowed. Only POST requests are accepted.'
    ]);
    exit;
}

// Configuration
$recipient_email = 'mzaid3470@gmail.com'; // Muhammad Zaid's verified email
$site_name = 'Muhammad Zaid — Portfolio';

// 1. Honeypot Spam Protection
if (!empty($_POST['website_url'])) {
    // Hidden bot field was filled out
    http_response_code(200); // Return 200 so spammers don't retry
    echo json_encode([
        'status' => 'success',
        'message' => 'Your message has been received.'
    ]);
    exit;
}

// 2. Collect and Sanitize Inputs
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
$service = isset($_POST['service']) ? trim(strip_tags($_POST['service'])) : 'General Inquiry';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

$errors = [];

// 3. Validation
if (empty($name) || mb_strlen($name) < 2) {
    $errors[] = 'Please enter your full name (at least 2 characters).';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}

$valid_services = ['Web Development', 'Embroidery Digitizing', 'General Inquiry'];
if (!in_array($service, $valid_services)) {
    $service = 'General Inquiry';
}

if (empty($subject) || mb_strlen($subject) < 3) {
    $errors[] = 'Please provide a valid subject (at least 3 characters).';
}

if (empty($message) || mb_strlen($message) < 10) {
    $errors[] = 'Please write a message with at least 10 characters.';
}

// Check for header injection attempts
if (preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email)) {
    $errors[] = 'Header injection attempt detected.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => implode(' ', $errors)
    ]);
    exit;
}

// 4. Construct Email
$email_subject = "[{$site_name}] New Inquiry: {$subject} ({$service})";

$email_body = "You have received a new contact inquiry from your portfolio website:\n\n";
$email_body .= "--------------------------------------------------\n";
$email_body .= "Sender Name:    {$name}\n";
$email_body .= "Sender Email:   {$email}\n";
$email_body .= "Selected Service: {$service}\n";
$email_body .= "Subject:        {$subject}\n";
$email_body .= "Date & Time:    " . date('Y-m-d H:i:s T') . "\n";
$email_body .= "--------------------------------------------------\n\n";
$email_body .= "Message:\n{$message}\n\n";
$email_body .= "--------------------------------------------------\n";
$email_body .= "Sent from Muhammad Zaid Portfolio Contact Form\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = "From: {$name} <noreply@" . ($_SERVER['SERVER_NAME'] ?? 'portfolio.local') . ">";
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = 'X-Mailer: PHP/' . phpversion();

// 5. Send Mail
$mail_sent = @mail($recipient_email, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Thank you! Your message has been sent successfully. Muhammad Zaid will get back to you shortly.'
    ]);
} else {
    // If the server mail() function is not configured, still notify user gracefully
    echo json_encode([
        'status' => 'success',
        'message' => 'Your message details have been validated! If your server mail service is offline, you can also reach out directly via WhatsApp or Email.'
    ]);
}
