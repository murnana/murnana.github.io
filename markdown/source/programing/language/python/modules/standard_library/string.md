---
subtitle: 文字のフォーマット
title: string
---

書式指定文字列
==============

``` {.python}
'{0}, {1}, {2}'.format('a', 'b', 'c')
'Coordinates: {latitude}, {longitude}'.format(latitude='37.24N', longitude='-115.81W')
```

フォーマット済み文字列リテラル
==============================

``` {.python}
f"{'a'}, {'b'}, {'c'}"

latitude = '37.24N'
longitude='-115.81W'
f"Coordinates: {latitude}, {longitude}"
```

::: {.seealso}
[6.1. string --- 一般的な文字列操作 --- Python 3.6.5
ドキュメント](https://docs.python.jp/3/library/string.html)

[2. 字句解析 --- Python 3.6.5 ドキュメント](https://docs.python.jp/3/reference/lexical_analysis.html#f-strings)

:   フォーマット済み文字列リテラルの話。
:::
