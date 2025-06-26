<?php
return [
    'paths' => ['/api/contact', '/api/contact-us'], // Allow all paths, or specify ['api/*', 'contact', 'contact-us']
    'allowed_methods' => ['POST'], // Allow all HTTP methods
    'allowed_origins' => ['https://development.astrapent.com'], // Allow your frontend origin
    'allowed_origins_patterns' => [], // Optional: for regex patterns
    'allowed_headers' => ['*'], // Allow all headers
    'exposed_headers' => [], // Headers to expose to frontend
    'max_age' => 1024, // Cache preflight requests for 0 seconds (no caching)
    'supports_credentials' => false, // Set to true if sending cookies
];