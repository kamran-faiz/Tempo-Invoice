<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Invoice;
use Inertia\Inertia;

class FbrLogController extends Controller
{
    public function index(){
        $invoice = Invoice::with('client:id,name')->get();
        $metrics = [
            'total_submitted' => Invoice::where('fbr_status', '!=', 'pending')->count(),
            'total_validated' => Invoice::where('fbr_status' , 'validated')->count(),
            'total_pending'   => Invoice::where('fbr_status' , 'pending')->count(),
            'total_rejected'   => Invoice::where('fbr_status', 'rejected')->count(),
        ];
        return Inertia::render('Fbr-Logs/Index',[
            'invoices' => $invoice,
            'metrics' => $metrics,
            

        ]);
    }
}
