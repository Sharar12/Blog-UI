<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() { return Post::with('category')->get(); }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category_id' => 'nullable|exists:categories,id',
        ]);
        return Post::create($validated);
    }

    public function show(Post $post) { return $post->load('category', 'comments'); }

    public function update(Request $request, Post $post) {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'category_id' => 'nullable|exists:categories,id',
        ]);
        $post->update($validated);
        return $post;
    }

    public function destroy(Post $post) { $post->delete(); return response()->noContent(); }
}
