<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;
  class FbrService
  {
    public function submitInvoice($invoice){
        $items = $invoice->items->map(function($item) {
    return [
        'product_name' => $item->product_name,
        'quantity' => $item->quantity,
        'unit_price' => $item->unit_price,
        'tax_rate' => $item->tax_rate,
        'amount' => $item->amount,
        'tax' => $item->tax,
        'total' => $item->total
    ];
});
   $payload = [
       'invoice_number' => $invoice->invoice_number,
       'business_id' => (string) $invoice->client->business_id,
       'ntn' => $invoice->client->ntn,
       'cnic' => $invoice->client->cnic,
       'amount' => $invoice->amount,
       'tax' => $invoice->tax,
       'total' => $invoice->total,
       'items' => $items

   ];
   $response = Http::post(env('FBR_API_URL') . '/api/fbr/submit', $payload);
   if($response->successful()){
     
    return $response->json()['irn'];
    
   }else{
    return $response->json()['message'];
   }
    }
   
  }