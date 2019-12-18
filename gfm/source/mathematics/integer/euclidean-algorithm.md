<https://mathtrain.jp/euclid>

> 自然数 a,b(a≥b) に対して  
> a を b で割った余りを r とおくとき  
> gcd(a, b)=gcd(b, r)  
> が成立し，これを繰り返し用いると  
> a と b の最大公約数が求まる。

ちょっと何言ってるかよくわからないので、証明を追ってみる。

gcdは **最大公約数(greatest common divisor)** のこと。

\(a = 390\) , \(b = 273\) のとき( \(a \geq b = 390 \geq 273\) )  
\(a\) を \(b\) で割った商 \(p\) と、その余り \(r\) は

\[\begin{aligned}
a \div b & = & 390 \div 273 \\
   & = & 1 \ldots 117
\end{aligned}\]

つまり、\(p = 1\), \(r = 117\)

# 使い方: \(a=bp+r\)

\[a & = & bp + r\]\[390 & = & (273 \times 1) + 117\]\[273 & = & 390 - 117\]

## \(a = 390\) を \(r = 117\) で割ってみる

> \[390 \div 117 & = & 3 \ldots 39\]\[a & = & 117 \times 3 + 39\]

## \(b = 273\) を \(r = 117\) で割ってみる

\[273 \div 117 & = & 2 \ldots 39\]\[bp & = & 117 \times 2 \ldots 39\]

# 使い方: \(a=bp+r\)

> ・ b,r がともに m の倍数→ a=bp+r も m の倍数。  
> となりgcd(a, b) ≥ gcd(b, r)  
> 以上から，gcd(a, b)=gcd(b, r)

<div class="seealso">

[ユークリッドの互除法 -
Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%83%E3%83%89%E3%81%AE%E4%BA%92%E9%99%A4%E6%B3%95)

[ユークリッドの互除法の証明と不定方程式 | 高校数学の美しい物語](https://mathtrain.jp/euclid)

</div>
