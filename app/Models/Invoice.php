<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Client;
use App\Models\InvoiceItem;


class Invoice extends Model
{
    protected $fillable = [
         'client_id',
         'invoice_number',
         'issue_date',
         'due_date',
         'amount',
         'tax',
         'total',
         'payment_status',
         'fbr_status',
         'fbr_invoice_number',
         'notes',

    ];

    public function client (){
        return $this->belongsTo(Client::class);
    }

    public function items(){
        return $this->hasMany(InvoiceItem::class);
    }
}
