<?php

namespace Tests\Unit;

use App\Models\Traits\HasBusinessScope;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class HasBusinessScopeTest extends TestCase
{
    public function test_explicit_business_id_is_not_overwritten_when_current_user_has_no_business(): void
    {
        Schema::create('test_models', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('business_id')->nullable();
            $table->string('name')->nullable();
            $table->timestamps();
        });

        $modelClass = new class extends Model {
            use HasBusinessScope;

            protected $table = 'test_models';
            protected $fillable = ['business_id', 'name'];
        };

        $user = User::factory()->create(['business_id' => null]);
        $this->actingAs($user);

        $instance = $modelClass::create([
            'business_id' => 42,
            'name' => 'Example',
        ]);

        $this->assertSame(42, $instance->business_id);

        Schema::dropIfExists('test_models');
    }
}
