<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained();
            $table->string('invoice_number');
            $table->date('issue_date');
            $table->date('due_date');
            $table->decimal('amount',15,2);
            $table->decimal('tax',15,2);
            $table->decimal('total',15,2);
            $table->enum('payment_status', ['paid','unpaid','overdue'])->default('unpaid');
            $table->enum('fbr_status',['pending','submitted','validated','rejected'])->default('pending');
            $table->string('fbr_invoice_number')->nullable();
            $table->string('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
