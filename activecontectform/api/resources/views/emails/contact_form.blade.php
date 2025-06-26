<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Project Inquiry</h2>

    <p><strong>Full Name:</strong> {{ $data['full_name'] }}</p>
    <p><strong>Email:</strong> {{ $data['email'] }}</p>
    <p><strong>Phone:</strong> {{ $data['phone'] }}</p>
    <p><strong>Project Type:</strong> {{ $data['project_type'] }}</p>
    <p><strong>Project Details:</strong></p>
    <p>{{ $data['project_details'] }}</p>
</body>
</html>
