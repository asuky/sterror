<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

/*
 *  [API] 記載内容管理クラス
 * 
 * 　ストーリー管理・作成等を実施
 * @access public
 * @author asuky
 * @package controller
 */

class PagesController extends Controller
{
    
     /* [GET /] トップページ表示
     * トップページを表示する
     * 
     * @access public
     * @param void
     * @return view index
     * 
     */
    public function index()
    {
        return view('index');
    }
    
    /*
     * [POST /pages] ページ新規作成
     * ページの新規追加を実施する
     * 
     * @access public
     * @param integer $stratum 階層名
     * @return integer $id 新規作成したページID
     * 
     */
    public function create()
    {
        return ['posted'];
    }
    
    
}
