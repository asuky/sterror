<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

/*
 *  [API] ストーリー決定クラス
 * 
 * 　どのストーリーを流すか、ウェイトを管理する
 * @access public
 * @author asuky
 * @package controller
 */

class RoutesController extends Controller
{
    
    /*
     * [GET /route] ルート取得
     * アクセス時のルートを決定する
     * 
     * @access public
     * @return mixed array ページ配列
     * 
     */
    public function get()
    {
        return [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ];
    }
    
    /*
     * [PUT /route] ルート評価
     * そのルートの評価を行う
     * 
     * @access public
     * @param integer array $page_id_array ページID配列
     * @return null
     * 
     */
    public function evaluate()
    {
        
    }
}