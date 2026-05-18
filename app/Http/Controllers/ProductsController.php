<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index(){
        $products = Product::get();
        return Inertia::render('Products/Index',[
            'products' => $products
        ]);
    }

    public function store(Request $request){
        $validated = $request -> validate([
            'business_id' => 'nullable',
            'name' => 'string|required',
            'description' => 'string|nullable',
            'unit_price' => 'decimal:2|required',
            'tax_rate' => 'decimal:2|required',
            'unit' => 'string|required',
            'is_active' => 'boolean'

        ]);
         $validated['business_id'] = 1;
        Product::create($validated);
        return redirect()->back()->with('Success', 'Product Created Successfully');
    }

   public function update(Request $request, Product $product){
          $validated = $request -> validate([
            'business_id' => 'nullable',
            'name' => 'string|required',
            'description' => 'string|nullable',
            'unit_price' => 'decimal:2|required',
            'tax_rate' => 'decimal:2|required',
            'unit' => 'string|required',
            'is_active' => 'boolean'

        ]);
         
        $product->update($validated);
        return redirect()->back()->with('Success', 'Product Updated Successfully');
   }

   public function destroy(Product $product){
           $product->delete();
           return redirect()->back()->with('Success', 'Product Deleted Successfully');
   }
}
