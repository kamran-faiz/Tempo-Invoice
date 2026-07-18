<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Business;
use Inertia\Inertia;
use App\Models\User;

class CompanyController extends Controller
{

     public function index(){
         $companies = Business::with('users')->get();
         return Inertia::render('SuperAdmin/Dashboard', ['companies' => $companies]);

     }
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

            Auth::login($user);
        });
        return redirect()->back()->with('success', 'Company Registered successfully');


    }
    
    public function update(Request $request , Business $company){
        $request->validate([
            'name' => 'required|string|max:255',
            'owner_name' => 'required|string|max:255',
            'user.name' => 'required|string|max:255',
            'user.email' => 'required|email|unique:users,email,' .$company->users->first()->id,
            'user.password' => 'nullable|min:8|confirmed',
        ]);
        DB::transaction(function () use($request , $company){
             $company->update([
                'name' => $request->name,
                'owner_name' => $request->owner_name,
             ]);
             $userData =[
                'name' => $request->input('user.name'),
                'email' => $request->input('user.email')
             ];
       if ($request->filled('user.password')) {
            $userData['password'] = Hash::make($request->input('user.password'));
        }

        $company->users->first()->update($userData);
    });

    return redirect()->back()->with('success', 'Company updated successfully');
    }
    public function destroy(Business $company){
        DB::transaction(function() use ($company){
            $company->users()->delete();
            $company->delete();
        });
        return redirect()->back()->with('success', 'Company deleted successfully');
    }




}
