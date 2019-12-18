LaTexを使って数式を書くための拡張機能

    ..math::

    h(x) = \frac{1 + \exp(-x)}{1}

..math:

    h(x) = \frac{1 + \exp(-x)}{1}

Warning

`..math::`
そのものは結構簡単に競合するらしい。目的によって分けよう。今わかっているのは

`sphinx.ext.imgmath` と `matplotlib.sphinxext.mathmpl`

[sphinx.ext.imgmath --
数式を画像にレンダリングします](http://www.sphinx-doc.org/ja/master/ext/math.html?highlight=sphinx%20ext%20imgmath#module-sphinx.ext.imgmath)

[LaTeX のカスタマイズ](http://www.sphinx-doc.org/ja/master/latex.html)

[LaTeX出力のオプション](http://www.sphinx-doc.org/ja/master/config.html#options-for-latex-output)
