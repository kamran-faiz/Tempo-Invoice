<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Business;
use App\Models\User;

class CompanyController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'owner_name' => 'required|string|max:255',
            'user.name' => 'required|string|max:255',
            'user.email' => 'required|email|unique:users,email',
            'user.password' => 'required|min:8|confirmed',
        ]);
        DB::transaction(function() use ($request){
            $business = Business::create([
                'name' => $request->name,
                'owner_name' => $request->owner_name,
            ]);
            $user = User::create([
                'name' => $request->input('user.name'),
                'email' => $request->input('user.email'),
                'password' => Hash::make($request->input('user.password')),
                'business_id' => $business->id,
            ]);
                     
            
        });
                    return redirect()->back()->with('success', 'Company Registered successfully');


    }
}
