<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Click;

class ClickController extends Controller
{
    //
    public function saveClick()
    {
        $date = date('Y-m-d');
        $click = Click::where('date', $date)->first();
        if ($click) {
            $numClicks = $click->numClicks + 1;
            $click->numClicks = $numClicks;
            $click->update();
            $clickNum = $numClicks;
        } else {
            $click = new Click;
            $click->date = $date;
            $click->numClicks = 1;
            $click->save();
            $clickNum = 1;
        }
        return response()->json([
            'status' => 200,
            'date' => $date,
            'clickNum' => $clickNum
        ]);
    }
    public function getClick()
    {
        $date = date('Y-m-d');
        $click = Click::where('date', $date)->first();
        if ($click) {
            $clickNum = $click->numClicks;
        } else {
            $clickNum = 0;
        }
        return response()->json([
            'status' => 200,
            'date' => $date,
            'clickNum' => $clickNum
        ]);
    }
}
