# sterror

作成中


# 気づき
* redux-logger は簡単に導入出来てすぐ使えるのが良い（applyMiddleware に logger を追加するだけで良い）
* textarea の扱いが面倒、readonly や text を指定すると textarea が controlled component となるが、この状態で readonly を解除しても controlled component のままなのでフォームの編集ができない（すぐに再レンダリングされてしまう）。
Uncontrolled にするために defaultValue を指定すると、そうなると今度は onClick 等ハンドラが動かなくなる（uncontrolled だから） …。
* mapStateToProps や mapDispatchToProps で map しすぎ、多分 Presentational と Container Component の切り分けが上手く出来てないと思う、まず完成形のアプリの外観をざっくり考えて、どこをどちらにするか考えればいいか？
* MaterialUIかっこいい、docもわかりやすくて良いので積極的に使ってみよう https://material-ui.com/
* 異常系（例外処理）の書き方を調べておく（個人の範囲であればそこまで厳密でなくても良いと思うけど…）
* フロントも環境自動分離（開発と本番）したい…Laravel側から持ってこれれば一番楽そうだが…ヘッダにでも埋め込んでみる？
* Component -> action / action creator -> reducer, saga の順に作るとやりやすいかな？（部品を置く→部品の出力を作る→出力を受けて何をするかを作る、感じ）
