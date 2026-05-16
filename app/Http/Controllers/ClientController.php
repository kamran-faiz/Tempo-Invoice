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
}
