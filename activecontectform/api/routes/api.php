<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContectFormController;
use App\Http\Controllers\ContectUsController;

use App\Mail\ContactFormMail;
use App\Models\Contact;

use App\Http\Middleware\CustomCorsMiddleware;


Route::post('/contact', [ContectFormController::class, 'store']);
Route::post('/contact-us', [ContectUsController::class, 'store']);


