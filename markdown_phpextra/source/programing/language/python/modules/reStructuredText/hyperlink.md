ハイパーリンクターゲットの種類 {#ハイパーリンクターゲットの種類}
==============================

| 種類 | 説明                   |
|------|------------------------|
| 内部 | 同じページ内に飛ぶ     |
| 外部 | ページ外に飛ぶ         |
| 間接 | 同じところに飛ぶが別名 |

間接ハイパーリンクターゲット(indirect hyperlink targets) {#間接ハイパーリンクターゲットindirect-hyperlink-targets}
--------------------------------------------------------

~~~ restructuredtext
.. _`google`: https://www.google.co.jp/
.. _`ぐーぐる`: `google`_

`google`_ も `ぐーぐる`_ も同じになります
~~~

[google](https://www.google.co.jp/) も
[ぐーぐる](https://www.google.co.jp/) も同じになります

明示的ハイパーリンクターゲット(explicit hyperlink targets) {#明示的ハイパーリンクターゲットexplicit-hyperlink-targets}
==========================================================

この名前にはこのリンクを使いたい、というときに使用できます。

~~~ restructuredtext
.. 何処でもいいので、リンクにしたい名前を入れる

.. _`google`: https://www.google.co.jp/

.. あとは文をいれるだけ

ぐーぐるさん `google`_
~~~

結果は以下の通り

ぐーぐるさん [google](https://www.google.co.jp/)

暗黙的ハイパーリンクターゲット(implicit hyperlink targets) {#暗黙的ハイパーリンクターゲットimplicit-hyperlink-targets}
==========================================================

セクションタイトル、脚注および引用によって生成されるハイパーリンクターゲットです。

~~~ restructuredtext
このページでは `明示的ハイパーリンクターゲット(explicit hyperlink targets)`_ のように使えます
~~~

このページでは [明示的ハイパーリンクターゲット(explicit hyperlink
targets)](#明示的ハイパーリンクターゲットexplicit-hyperlink-targets)
のように使えます

<div class="seealso" markdown="1">

[reStructuredText Markup
Specification](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#hyperlink-targets)
本家リファレンス

[reStructuredText Markup Specification](http://docutils.sphinx-users.jp/docutils/docs/ref/rst/restructuredtext.html#hyperlink-targets)

:   日本語訳

</div>
