---
title: 初めてのアプリの作成
---

# Android Studio をダウンロードする

| <https://developer.android.com/studio/?hl=ja> からダウンロードする
| ほぼデフォルトのままインストール

> ![image](../images/1-1_install.PNG)
>
> ![image](../images/1-2_install.PNG)
>
> ![image](../images/1-3_install.PNG)
>
> ![image](../images/1-4_install.PNG)
>
> ![image](../images/1-5_install.PNG)
>
> ![image](../images/1-6_install.PNG)
>
> ![image](../images/1-7_install.PNG)

# Android Studio の初回起動

インストールが終了し、初めて Android
Studio を立ち上げると、セットアップ画面になる。

> ![image](../images/2-1_install.PNG)
>
> 前のバージョンのアップデートなどでない限りは「Do not import
> settings」を選ぼう

その後、Setup Wizard が立ち上がる

> ![image](../images/3-1_setup-wizard.PNG)
>
> なんかもう早速アップデートあるよ！と言っているがひとまず無視する
>
> ![image](../images/3-2_setup-wizard.PNG)
>
> 何も考えたくないなら「Standard」を選ぶ。
> Custom にして、必要な SDK だけ入れてもいい (SDK は後でも入れられる)
>
> ![image](../images/3-3_setup-wizard.PNG)
>
> IDE のテーマを選べる。私はダークテーマが好きなので「Darcula」を選んだ
>
> ![image](../images/3-4_setup-wizard.PNG)
>
> セットアップの最終チェック。SDK は Windows の場合
> `%LOCALAPPDATA%\Android\Sdk` が デフォルトになる
>
> ![image](../images/3-5_setup-wizard.PNG)
>
> スクロールすると他に何が入るのかが分かる。問題なければ「Finish」を押す
>
> ![image](../images/3-6_setup-wizard.PNG)
>
> 後はひたすらダウンロードが終わるのを待つ

# プロジェクトの新規作成

![image](../images/4-1_welcome.png)

このまま新規プロジェクトを始めてもよいが、その前に一工夫

> ![image](../images/5-1_settings.png)
>
> 右下の歯車マーク(Confingure)から「Settings」を選択。
>
> その中の「System
> Settings」から「Statup/Shutdown」の項目を選び、「Reopen last project
> on startup」にチェックを入れる。
>
> これにより、起動時に Welcome ページが開くようになる。(前回のプロジェクトを開くようにしたい場合は、このチェックを外す)

話を戻して、「Start a new Android Studio project」を押す

> [3.3](https://developer.android.com/studio/releases/?hl=ja#3-3-0) から
> Create New Project wizard が変わっている。
>
> ![image](../images/6-1_new-project.png)
>
> 「Empty Activity」を選択
>
> ![image](../images/6-2_new-project.png)
>
> Name にプロジェクト名、Save location にプロジェクト名+保存位置を入れる
>
> ![image](../images/6-3_new-project.png)
>
> Finish 後、必要な依存パッケージがダウンロードされる
>
> ![image](../images/7-1_start-project.png)
>
> スタート直後は、プロジェクトを読み込み切っていない状態なので注意
>
> ![image](../images/7-2_start-project.png)
>
> Gradle プロジェクトが読み込み終わったら OK。

# エミュレータ or 実機での確認

アプリケーションをビルドし、実機またはエミュレータに実行させるには、Run を押す

![image](../images/8-1_run.png)

その後、実機又はエミュレータを選ぶ

![image](../images/8-2_run.png)

## 実機の場合

| 実機に「開発者向けオプション」を表示させる
| そのためには、以下の手順が必要

> Android 8.0 以降:
>
> > 「設定」\>「バージョン情報」\>「ソフトウェア情報」\>「その他」\>「ビルド番号」
> >
> > この「ビルド番号」を 7 回タップする

その後、「開発者向けオプション」から「USB デバック」を ON にする

その状態で PC に接続すると、「Select Deployment
Target」にそのデバイスが現れるので、選択して「OK」を押す

## エミュレータの場合

新規作成時は「Create New Virtual
Device」を押下。そうでなければデバイスのリストが並ぶので、それを選んで実行できる。

![image](../images/8-2_run.png)

エミュレートしたいデバイスを選ぶ

![image](../images/9-1_create-virtual.png)

デバイスの AndroidOS バージョンと `ABI`{.interpreted-text role="term"}
を選択

![image](../images/9-2_create-virtual.png)

「AVD Name」にエミュレータの名前、「Startup
orientation」に開始時の向きを入れる

![image](../images/9-3_create-virtual.png)

::: {.seealso}
[初めてのアプリの作成 \| Android
Developers](https://developer.android.com/training/basics/firstapp/?hl=ja)
:::
