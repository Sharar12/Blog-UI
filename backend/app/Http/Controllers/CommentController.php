<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'post_id' => 'required|exists:posts,id',
            'content' => 'required|string',
        ]);
        return Comment::create($validated);
    }

    public function destroy(Comment $comment) { $comment->delete(); return response()->noContent(); }
}
