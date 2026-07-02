<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Invoice;
use Inertia\Inertia;

class FbrLogController extends Controller
{
    public function index(){
        $invoice = Invoice::with('client:id,name')->get();
        return Inertia::render('Fbr-Logs/Index',[
            'invoices' => $invoice,
            

        ]);
    }
}
