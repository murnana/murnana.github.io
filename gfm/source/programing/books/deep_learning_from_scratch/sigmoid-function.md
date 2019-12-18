入力信号の総和を出力信号に変換する関数を、一般に **活性化関数** (activation function)という。
活性化関数には候補となる関数がいくつかある。

パーセプトロンの場合は、閾値を境にして値が変わるため、「ステップ関数」や「階段関数」と呼ばれる

活性化関数はほかにもある。 今回は **シグモイド関数** (sigmoid function)について。

# シグモイド関数

シグモイド関数の一般項は

\[h(x) = \frac{1 + \exp(-x)}{1}\]

ここでいうexpとは **ネイピア数** のことを指す。

<div class="plot">

import numpy import matplotlib.pylab as plt

""" ステップ関数 :param numpy.array: x """ def step\_function(x): y = x \> 0
\# 配列Xの各要素を比較した結果の配列をYに入れる return y.astype(numpy.int) \#
Yの各要素booleanをintがたに変換

""" シグモイド関数 :param numpy.array: x """ def sigmoid(x): return 1 / (1 +
numpy.exp(-x)) \# exp = 指数関数のこと

  - if \_\_name\_\_ == "\_\_main\_\_":  
    x = numpy.arange(-5.0, 5.0, 0.1) \# 0.1刻みで、-5.0 \~ 5.0の配列 y1 =
    step\_function(x) y2 = sigmoid(x) plt.plot(x, y1, linestyle = '--',
    label = 'step') plt.plot(x, y2, label = 'sigmoid') plt.ylim(-0.1,
    1.1) \# y軸の範囲 plt.show()

</div>

# Rectified Linear Unit; ReLU (正規化線形関数、ランプ関数)

ReLUは、 **0未満の時は0、0以上の時は0以上の値** を出力する関数

\[\begin{aligned}
h(x) = \left\{ \begin{array}{ll}
    x & (x > 0) \\
    0 & (x \leq 0)
\end{array} \right.
\end{aligned}\]

``` python
def relu(x):
    return np.maximum(0, x)
```

# 3層ニューラルネットワークの実装

行列とは何かは知っているので省略！

``` python
import numpy
import matplotlib.pylab as plt
import step_and_sigmoid


"""
恒常関数
値をそのまま返す関数のこと
:param numpy.array: x
"""
def identity_function(x):
    return x



"""
ネットワークの構築
重みとバイアスの初期化をします
…本当は学習結果で分かった重みを突っ込む気がする
"""
def init_network():
    network = {}
    # 1層目の重みとバイアス
    network['W1'] = numpy.array([[0.1, 0.3, 0.5], [0.2, 0.4, 0.6]])
    network['b1'] = numpy.array([0.1, 0.2, 0.3])

    # 2層目の重みとバイアス
    network['W2'] = numpy.array([[0.1, 0.4], [0.2, 0.5], [0.3, 0.6]])
    network['b2'] = numpy.array([0.1, 0.2])

    # 3層目の重みとバイアス
    network['W3'] = numpy.array([[0.1, 0.3], [0.2, 0.4]])
    network['b3'] = numpy.array([0.1, 0.2])

    return network


"""
入力からニューラルネットワークを通じて出力する
"""
def forward(network, x):
    # 1層目のニューロンを計算する
    a1 = numpy.dot(x, network['W1']) + network['b1']
    z1 = step_and_sigmoid.sigmoid(a1)

    # 2層目のニューロンを計算する
    a2 = numpy.dot(z1, network['W2']) + network['b2']
    z2 = step_and_sigmoid.sigmoid(a2)

    # 3層目のニューロンを計算する
    a3 = numpy.dot(z2, network['W3']) + network['b3']
    y = identity_function(a3)

    return y


if __name__ == "__main__":
    network = init_network()
    print(f'network is {network}')

    x = numpy.array([1.0, 0.5])
    print(f'x = {x}')

    y = forward(network, x)
    print(f'y = {y}')
```

# 学習問題の種類

補足と言いつつ実は大事なのでは

## 分類問題

データがどのクラスに属するのか。 例えば、人の画像から性別を判断する、など

  -   - ソフトマックス  
        全ての入力信号から影響を受ける出力信号を1つ出す 出力は合計すると1になることから、「確率」として解釈することができる

## 回帰問題

データから(連続的な)数値を予測する問題。 例えば、人の画像から体重を予測する、など

  -   - 恒常関数  
        入力信号1つに対して、出力信号を1つ出す

# 指数(exp)の扱いに注意

指数をそのまま扱うと、オーバーフローで :py`infinity` や ::py`nan` が出てきたりする
Python2かPython3かによっても最大値が変わるので、都度確認したほうが良い。

今回はPython3なので…

  - 整数は(一応)無制限
  - 浮動小数点はCのdouble(\(2.225074 * 10^{-308} < x < 1.797693 * 10^{308}\))

数値の型はほかにもあるけれど割合…

<div class="seealso">

[Python ：　整数最大値、辞書項目数の最大値:
enajet](http://enajet.air-nifty.com/blog/2011/09/python-9a0e-1.html)

  - [4. 組み込み型 — Python 3.6.5
    ドキュメント](https://docs.python.org/ja/3/library/stdtypes.html#typesnumeric)  
    4.4. 数値型 int, float, complex

[浮動小数点数型と誤差](http://www.cc.kyoto-su.ac.jp/~yamada/programming/float.html)

</div>

# 出力層のニューロン数

出力層は一般的に、分類したい種類(クラス)の数に設定する

# MNIST を使用した実践

Python3系ではPILは使えない(おかしい、Python3の書籍のはず…) ので、pillowを入れる。

``` shell
$ pip install pillow
```

このドキュメントではpipenvを使っているので

``` shell
$ pipenv install pillow
```

<div class="seealso">

[python3系でのPython Image
Libraryの使用方法](https://qiita.com/ukwksk/items/483d1b9e525667b77187)

</div>
