<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class ContectFormController extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
        'full_name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'phone' => 'required|string|max:20',
        'project_type' => 'required|string|max:255',
        'project_details' => 'required|string',
    ]);

    
    // Send email
    Mail::to('sidharthp868@gmail.com')->send(new ContactFormMail($validated));
    return response()->json([
    'status' => 'success',
    'message' => 'Form submitted and email sent successfully!'
], 200);


}
}
