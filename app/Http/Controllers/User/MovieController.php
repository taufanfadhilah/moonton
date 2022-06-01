<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{
    public function show(Movie $movie)
    {
        return inertia('User/Dashboard/Movie/Show', ['movie' => $movie]);
    }
}
