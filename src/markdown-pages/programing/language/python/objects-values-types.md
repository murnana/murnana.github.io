---
subtitle: シーケンス(sequence)型
title: オブジェクトとか変数の型とか
---

-

    有限の順序集合(ordered set)

    :   -

            順番がある(大小など比較できるかはともかく)

            :   appleは「apple」という順番の文字列でなければ意味がない、とか

# 変更不能なシーケンス (immutable sequence)

中身のルールが書き換えできないもの。 文字列なら Unicode(U+0000 -
U+10FFFF)の配列でなければならない、とか。

- 文字列型(string)

-


    タプル型(tupple)

    :   型が違っててもいいが、配列の順番に意味があり、常に固定されている
        配列の途中を削除したり、挿入したりはできない

-

    bytes

    :   1要素8-bitバイト。

::: {.seealso}

[3. データモデル -- Python 3.6.5 ドキュメント](https://docs.python.jp/3/reference/datamodel.html#the-standard-type-hierarchy)

: 3.1. オブジェクト、値、および型
:::
