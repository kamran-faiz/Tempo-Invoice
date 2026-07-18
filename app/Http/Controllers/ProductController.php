<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        $products = Product::get();
        return Inertia::render('Products/Index',[
            'products' => $products
        ]);
    }

    public function store(Request $request){
        $validated = $request -> validate([
            
            'name' => 'string|required',
            'description' => 'string|nullable',
            'unit_price' => 'numeric|required',
            'tax_rate' => 'numeric|required',
            'unit' => 'string|required',
            'is_active' => 'boolean'

        ]);
        $businessId = auth()->user()?->business_id;

        if (!$businessId) {
            return redirect()->back()->withErrors([
                'business' => 'No business is assigned to the current user.',
            ]);
        }

        $validated['business_id'] = $businessId;
        Product::create($validated);
        return redirect()->back()->with('success', 'Product Created Successfully');
    }

   public function update(Request $request, Product $product){
          $validated = $request -> validate([
            
            'name' => 'string|required',
            'description' => 'string|nullable',
            'unit_price' => 'numeric|required',
            'tax_rate' => 'numeric|required',
            'unit' => 'string|required',
            'is_active' => 'boolean'

        ]);
         
        $product->update($validated);
        return redirect()->back()->with('success', 'Product Updated Successfully');
   }

   public function destroy(Product $product){
           $product->delete();
           return redirect()->back()->with('success', 'Product Deleted Successfully');
   }
}
