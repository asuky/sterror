# sterror

作成中

Demo: https://sterror.portraits.asuky.net


# 気づき
* redux-logger は簡単に導入出来てすぐ使えるのが良い（applyMiddleware に logger を追加するだけで良い）
* textarea の扱いが面倒なことがある
readonly や text を指定すると textarea が controlled component となるが、この状態で readonly を解除しても controlled component のままなのでフォームの編集ができない（すぐに再レンダリングされてしまう）。
Uncontrolled にするために defaultValue を指定すると、そうなると今度は onClick 等ハンドラが動かなくなる（uncontrolled だから） …。