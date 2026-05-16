<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Client;
class ClientController extends Controller
{

    public function index(){
        $clients = Client::get();
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
        return redirect()->back()->with('Success', 'Client Created Successfully');
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
        return redirect()->back()->with('Success', 'Client Updated Successfully');
    }

    public function destroy(Client $client){
        $client->delete();
        return redirect()->back()->with('Success', 'Client Deleted Successfully');
    }
}
