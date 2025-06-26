<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Mail\ContactUsFormMail;
use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class ContectUsController extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
        'your_name' => 'required|string|max:255',
        'your_email' => 'required|email|max:255',
        'your_subject' => 'required|string|max:255',
        'your_message' => 'required|string|max:1000',
    ]);

    
    // Send email
    Mail::to('sidharthp868@gmail.com')->send(new ContactUsFormMail($validated));
    return response()->json([
    'status' => 'success',
    'message' => 'Form submitted and email sent successfully!'
], 200);


}
}
