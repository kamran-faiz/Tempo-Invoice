<?php

namespace App\Models\Traits;
use App\Models\Scopes\BusinessScope;

trait HasBusinessScope
{
   protected static function booted(): void
{
    static::addGlobalScope(new BusinessScope());
    static::creating(function ($model) {
       
   
     if(auth()->check()){
            $model->business_id = auth()->user()->business_id;
        }
         });
} 
}