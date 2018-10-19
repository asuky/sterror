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
        return ['hoge', 'piyo', 'fuga', 'hogehoge', 'piyopiyo'];
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