<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::all()->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'created_at' => $user->created_at->format('Y-m-d H:i:s'),
                ];
            }),
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        return redirect()->route('users.index')
            ->with('message', 'User created successfully.');
    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
        ]);
    }

    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'password' => ['nullable', 'string', 'min:8'],
        ]);

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        
        if ($request->filled('password')) {
            $user->password = Hash::make($validated['password']);
        }
        
        $user->save();

        return redirect()->route('users.index')
            ->with('message', 'User updated successfully.');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index')
            ->with('message', 'User deleted successfully.');
    }
}