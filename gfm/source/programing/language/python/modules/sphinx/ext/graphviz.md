ビルドイン拡張モジュール。 グラフ(図)を書くためのツールを、直接Sphinx上で書けるというもの。

``` python
# conf.py

extensions = [
    'sphinx.ext.graphviz'       # グラフを書く
    # あとなんかあれば
]

# 吐き出された図のファイルフォーマット
# デフォルトは'png'だが、他に'svg'がある
graphviz_output_format = 'svg'
```

<div class="graphviz">

  - digraph foo {  
    "bar" -\> "baz";

}

</div>

<div class="seealso">

  - [sphinx.ext.graphviz – Graphvizのグラフを追加 - Sphinx 1.5.6
    ドキュメント](http://www.sphinx-doc.org/ja/stable/ext/graphviz.html#module-sphinx.ext.graphviz)  
    公式ドキュメント(日本語版)

  - [Graphviz - Graph Visualization Software](http://graphviz.org/)  
    Graphviz本家

</div>
