<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'business_id',
        'name',
        'email',
        'phone',
        'city',
        'ntn',
        'cnic',
        'client_type',
        'address'


    ];

    public function business(){
        return $this->belongsTo(Business::class);
    }
}
