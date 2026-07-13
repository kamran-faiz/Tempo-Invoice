<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    protected $fillable = [
            'name',
            'owner_name'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
