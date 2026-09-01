<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class PortfolioController extends Controller
{
    public function show()
    {
        return view('portfolio');
    }

    public function contact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();

        // Option A: email it to yourself
        // Mail::raw($data['message'], function ($mail) use ($data) {
        //     $mail->to('hello@alexmorgan.dev')
        //          ->subject($data['subject'])
        //          ->replyTo($data['email'], $data['name']);
        // });

        // Option B: store it — requires a ContactMessage model + migration
        // \App\Models\ContactMessage::create($data);

        return response()->json(['message' => 'Message sent successfully.']);
    }
}
