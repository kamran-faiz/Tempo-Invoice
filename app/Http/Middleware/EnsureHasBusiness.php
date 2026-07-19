<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureHasBusiness
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
{
    $user = $request->user();

    if ($user && is_null($user->business_id)) {
        if ($user->is_superadmin) {
            return redirect()->route('superadmin.dashboard');
        }

        return redirect('/login')->with('error', 'Your account is not linked to a business.');
    }

    return $next($request);
}
}
