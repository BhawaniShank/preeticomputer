<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContectForm extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'project_type',
        'project_details',
    ];
}
