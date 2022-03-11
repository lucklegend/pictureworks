<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Click extends Model
{
    //
    protected $table = 'click';
    protected $fillable = [
        'date',
        'numClicks'
    ];
}
