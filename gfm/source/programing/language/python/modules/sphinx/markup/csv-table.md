いくつか方法があるが、たぶん一番よさげな方法がこれ。

``` restructuredtext
.. csv-table::
    :header: a, b, c

    hoge, page, foo
```

結果は以下。

| a    | b    | c   |
| ---- | ---- | --- |
| hoge | page | foo |

# オプション

| 名前         | 説明         |
| ---------- | ---------- |
| `:header:` | ヘッダとなるタイトル |

<div class="seealso">

[python-sphinxで表を書く時は csv-table を使った方が便利 -
Qiita](https://qiita.com/r9y9/items/368307515e54c8949607)

[reStructuredText
Directives](http://docutils.sourceforge.net/docs/ref/rst/directives.html#csv-table)

</div>
