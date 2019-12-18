ハイパーリンクターゲットの種類
==============================

<table>
<thead>
<tr class="header">
<th>種類</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>内部</td>
<td>同じページ内に飛ぶ</td>
</tr>
<tr class="even">
<td>外部</td>
<td>ページ外に飛ぶ</td>
</tr>
<tr class="odd">
<td>間接</td>
<td>同じところに飛ぶが別名</td>
</tr>
</tbody>
</table>

間接ハイパーリンクターゲット(indirect hyperlink targets)
--------------------------------------------------------

    .. _`google`: https://www.google.co.jp/
    .. _`ぐーぐる`: `google`_

    `google`_ も `ぐーぐる`_ も同じになります

[google](https://www.google.co.jp/) も
[ぐーぐる](https://www.google.co.jp/) も同じになります

明示的ハイパーリンクターゲット(explicit hyperlink targets)
==========================================================

この名前にはこのリンクを使いたい、というときに使用できます。

    .. 何処でもいいので、リンクにしたい名前を入れる

    .. _`google`: https://www.google.co.jp/

    .. あとは文をいれるだけ

    ぐーぐるさん `google`_

結果は以下の通り

ぐーぐるさん [google](https://www.google.co.jp/)

暗黙的ハイパーリンクターゲット(implicit hyperlink targets)
==========================================================

セクションタイトル、脚注および引用によって生成されるハイパーリンクターゲットです。

    このページでは `明示的ハイパーリンクターゲット(explicit hyperlink targets)`_ のように使えます

このページでは [明示的ハイパーリンクターゲット(explicit hyperlink
targets)](#明示的ハイパーリンクターゲットexplicit-hyperlink-targets)
のように使えます

[reStructuredText Markup
Specification](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#hyperlink-targets)
本家リファレンス

[reStructuredText Markup Specification](http://docutils.sphinx-users.jp/docutils/docs/ref/rst/restructuredtext.html#hyperlink-targets)  
日本語訳
