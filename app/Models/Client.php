<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Invoice;
use App\Models\Traits\HasBusinessScope;

class Client extends Model
{

    use  HasBusinessScope;
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
    public function invoices(){
        return $this->hasMany(Invoice::class);
    }
}
