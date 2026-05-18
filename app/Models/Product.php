<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable =[
          
             'business_id',
             'name',
             'description',
             'unit_price',
             'tax_rate',
             'unit',
             'is_active'


    ];

    public function business(){
        return $this->belongsTo(Business::class);
    }
}
