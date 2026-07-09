<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Invoice;
use App\Models\Client;
class ClientController extends Controller
{

    public function index(){
        $clients = Client::paginate(10);
        return Inertia::render('Clients/Index',[
            'clients' => $clients,
        ]);
    }

    public function store(Request $request){
        $validated = $request->validate([
            'business_id' => 'nullable',
            'name' => 'required|string|max:100',
            'email' => 'nullable|email',
            'phone' => 'nullable|string',
            'city' => 'string|required',
            'ntn' => 'string|nullable',
            'cnic' => 'string|nullable',
            'client_type' => 'required|in:b2b,b2c',
            'address' => 'string|required',


        ]);
        $validated['business_id'] = 1;
        Client::create($validated);
        return redirect()->back()->with('success', 'Client Created Successfully');
    }

    public function update(Request $request, Client $client){
        $validated = $request->validate([
         'business_id' => 'nullable',
            'name' => 'required|string|max:100',
            'email' => 'nullable|email',
            'phone' => 'nullable|string',
            'city' => 'string|required',
            'ntn' => 'string|nullable',
            'cnic' => 'string|nullable',
            'client_type' => 'required|in:b2b,b2c',
            'address' => 'string|required',
    
        ]);
        $client->update($validated);
        return redirect()->back()->with('success', 'Client Updated Successfully');
    }
   public function show(Client $client)
{     
    $invoices = $client->invoices()->paginate(5);
    
    $metrics = [
        'total_invoiced' => $client->invoices->sum('total'),
        'pending_amount' => $client->invoices->where('payment_status','unpaid')->sum('total'),
        'overdue_amount' => $client->invoices->where('payment_status', 'overdue')->sum('total'),
    ];
    
    return inertia('Clients/View', [
        'client' => $client,
        'metrics' => $metrics,
        'products' => Product::all(),
        'invoices' => $invoices,
    ]);
}

    public function destroy(Client $client){
        $client->delete();
        return redirect()->back()->with('success', 'Client Deleted Successfully');
    }
}
