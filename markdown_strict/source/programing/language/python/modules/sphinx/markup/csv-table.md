いくつか方法があるが、たぶん一番よさげな方法がこれ。

    .. csv-table::
        :header: a, b, c

        hoge, page, foo

結果は以下。

<table>
<thead>
<tr class="header">
<th>a</th>
<th>b</th>
<th>c</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>hoge</td>
<td>page</td>
<td>foo</td>
</tr>
</tbody>
</table>

オプション
==========

<table>
<thead>
<tr class="header">
<th>名前</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>:header:</code></td>
<td>ヘッダとなるタイトル</td>
</tr>
</tbody>
</table>

[python-sphinxで表を書く時は csv-table を使った方が便利 -
Qiita](https://qiita.com/r9y9/items/368307515e54c8949607)

[reStructuredText
Directives](http://docutils.sourceforge.net/docs/ref/rst/directives.html#csv-table)
