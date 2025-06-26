<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Project Inquiry</h2>

    <p><strong>Full Name:</strong> {{ $data['full_name'] }}</p>
    <p><strong>Email:</strong> {{ $data['email'] }}</p>
    <p><strong>Company Name:</strong> {{ $data['company_name'] }}</p>
    <p><strong>Phone Number:</strong> {{ $data['phone_number'] }}</p>
    <p><strong>Your Message:</strong></p>
    <p>{{ $data['your_message'] }}</p>
</body>
</html>
