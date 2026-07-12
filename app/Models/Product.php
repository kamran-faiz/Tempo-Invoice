<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Traits\HasBusinessScope;
class Product extends Model
{
    use HasBusinessScope;
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
