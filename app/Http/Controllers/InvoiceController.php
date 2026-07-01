<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Invoice;
use App\Models\Product;
use App\Services\FbrService;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    public function index(){
        $invoice = $invoice = Invoice::with(['client:id,name','items'])->get();
        $clients = Client::select('id', 'name')->orderBy('name', 'asc')->get();
        $products = Product::select('id', 'name', 'unit_price')->orderBy('name', 'asc')->get();
        $metrics = [
            'total billed' => Invoice::sum('total'),
            'total collected' => Invoice::where('payment_status', 'paid')->sum('total'),
            'total outstanding' => Invoice::whereIn('payment_status',['unpaid', 'overdue'])->sum('total'),
            'fbr unsumbitted' => Invoice::whereIn('fbr_status',['pending','rejected'])->count(),

        ];
        return Inertia::render('Invoices/Index', [
            'invoice' => $invoice,
            'metrics' => $metrics,
            'clients' => $clients,
            'products' => $products
        ]); 
    }

    public function store(Request $request){
        $validated = $request->validate([
              'client_id'            => 'required|exists:clients,id',
              'invoice_number'       => 'required|unique:invoices,invoice_number|string',
              'issue_date'           => 'required|date',
              'due_date'             => 'required|date|after_or_equal:issue_date',
              'amount'               => 'required|numeric|min:0',
              'tax'                  => 'required|numeric|min:0',
              'total'                => 'required|numeric|min:0',
              'notes'                => 'nullable|string',
              'items'                => 'required|array|min:1',
              'items.*.product_id'   => 'nullable|exists:products,id',
              'items.*.product_name' => 'required|string',
              'items.*.quantity'     => 'required|integer|min:1',
              'items.*.unit_price'   => 'required|numeric|min:0',
              'items.*.tax_rate'     => 'required|numeric|min:0',
              'items.*.amount'       => 'required|numeric|min:0',
              'items.*.tax'          => 'required|numeric|min:0',
              'items.*.total'        => 'required|numeric|min:0',
        ]);
        DB::transaction(function() use ($validated){
              $invoice = Invoice::create([
                   'client_id'      => $validated['client_id'],
                   'invoice_number' => $validated['invoice_number'],
                   'issue_date'     => $validated['issue_date'],
                   'due_date'       => $validated['due_date'],
                   'amount'         => $validated['amount'],
                   'tax'            => $validated['tax'],
                   'total'          => $validated['total'],
                   'notes'          => $validated['notes'],
              ]);
              $invoice->items()->createMany($validated['items']);
        });
        return redirect()->back()->with('Success', 'Invoice created successfully');
    }

   
        public function update(Request $request, Invoice $invoice)
    {
        $validated = $request->validate([
            'client_id'            => 'required|exists:clients,id',
            'invoice_number'       => 'required|string|unique:invoices,invoice_number,' . $invoice->id,
            'issue_date'           => 'required|date',
            'due_date'             => 'required|date|after_or_equal:issue_date',
            'amount'               => 'required|numeric|min:0',
            'tax'                  => 'required|numeric|min:0',
            'total'                => 'required|numeric|min:0',
            'payment_status'       => 'required|in:paid,unpaid,overdue',
            'fbr_status'           => 'required|in:pending,submitted,validated,rejected',
            'fbr_invoice_number'   => 'nullable|string',
            'notes'                => 'nullable|string',
            'items'                => 'required|array|min:1',
            'items.*.product_id'   => 'nullable|exists:products,id',
            'items.*.product_name' => 'required|string',
            'items.*.quantity'     => 'required|integer|min:1',
            'items.*.unit_price'   => 'required|numeric|min:0',
            'items.*.tax_rate'     => 'required|numeric|min:0',
            'items.*.amount'       => 'required|numeric|min:0',
            'items.*.tax'          => 'required|numeric|min:0',
            'items.*.total'        => 'required|numeric|min:0',
        ]);

        DB::transaction(function () use ($invoice, $validated) {
            $invoice->update([
                'client_id'          => $validated['client_id'],
                'invoice_number'     => $validated['invoice_number'],
                'issue_date'         => $validated['issue_date'],
                'due_date'           => $validated['due_date'],
                'amount'             => $validated['amount'],
                'tax'                => $validated['tax'],
                'total'              => $validated['total'],
                'payment_status'     => $validated['payment_status'],
                'fbr_status'         => $validated['fbr_status'],
                'fbr_invoice_number' => $validated['fbr_invoice_number'],
                'notes'              => $validated['notes'],
            ]);

            $invoice->items()->delete();
            $invoice->items()->createMany($validated['items']);
        });

        return redirect()->back()->with('success', 'Invoice updated successfully.');
    }

    public function destroy(Invoice $invoice){
        DB::transaction(function () use ($invoice) {
    $invoice->items()->delete(); 
    $invoice->delete();         
});
    }
    public function show(Invoice $invoice)
{
   
    $invoice->load(['client', 'items']);

    return Inertia::render('Invoices/Show', [
        'invoice' => $invoice
    ]);

   
}
 public function submitToFbr(Invoice $invoice)
    {
         $fbrService = new FbrService();
         $invoice->load(['client', 'items']);
         $result = $fbrService->submitInvoice($invoice);
       if($result['success']){
        $invoice->update([
            'fbr_status' => 'validated',
            'fbr_invoice_number' => $result['irn'],
        ]);
        return redirect()->back()->with('success', 'Invoice validated by FBR successfully');
       }else{
        $invoice->update([
            'fbr_status' => 'rejected',
            'fbr_rejection_reason' => $result['message'],
        ]);
        return redirect()->back()->with('error', 'Fbr has rejected your invoice' . $result['message']);
       }
         

    }
    }

