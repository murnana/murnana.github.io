===============================================================================
初めてのアプリの作成
===============================================================================

Android Studio をダウンロードする
===============================================================================

| https://developer.android.com/studio/?hl=ja からダウンロードする
| ほぼデフォルトのままインストール

    .. image:: ../images/1-1_install.PNG
    .. image:: ../images/1-2_install.PNG
    .. image:: ../images/1-3_install.PNG
    .. image:: ../images/1-4_install.PNG
    .. image:: ../images/1-5_install.PNG
    .. image:: ../images/1-6_install.PNG
    .. image:: ../images/1-7_install.PNG


Android Studio の初回起動
===============================================================================

インストールが終了し、初めてAndroid Studioを立ち上げると、セットアップ画面になる。

    .. image:: ../images/2-1_install.PNG

    前のバージョンのアップデートなどでない限りは「Do not import settings」を選ぼう


その後、Setup Wizardが立ち上がる

    .. image:: ../images/3-1_setup-wizard.PNG

    なんかもう早速アップデートあるよ！と言っているがひとまず無視する

    .. image:: ../images/3-2_setup-wizard.PNG

    何も考えたくないなら「Standard」を選ぶ。
    Customにして、必要なSDKだけ入れてもいい
    (SDKは後でも入れられる)

    .. image:: ../images/3-3_setup-wizard.PNG

    IDEのテーマを選べる。私はダークテーマが好きなので「Darcula」を選んだ

    .. image:: ../images/3-4_setup-wizard.PNG

    セットアップの最終チェック。SDKはWindowsの場合 ``%LOCALAPPDATA%\Android\Sdk`` が デフォルトになる

    .. image:: ../images/3-5_setup-wizard.PNG

    スクロールすると他に何が入るのかが分かる。問題なければ「Finish」を押す

    .. image:: ../images/3-6_setup-wizard.PNG

    後はひたすらダウンロードが終わるのを待つ



プロジェクトの新規作成
===============================================================================

.. image:: ../images/4-1_welcome.png

このまま新規プロジェクトを始めてもよいが、その前に一工夫

    .. image:: ../images/5-1_settings.png

    右下の歯車マーク(Confingure)から「Settings」を選択。

    その中の「System Settings」から「Statup/Shutdown」の項目を選び、「Reopen last project on startup」にチェックを入れる。

    これにより、起動時にWelcomeページが開くようになる。(前回のプロジェクトを開くようにしたい場合は、このチェックを外す)


話を戻して、「Start a new Android Studio project」を押す

    `3.3 <https://developer.android.com/studio/releases/?hl=ja#3-3-0>`_ から Create New Project wizardが変わっている。

    .. image:: ../images/6-1_new-project.png

    「Empty Activity」を選択

    .. image:: ../images/6-2_new-project.png

    Nameにプロジェクト名、Save locationにプロジェクト名+保存位置を入れる

    .. image:: ../images/6-3_new-project.png

    Finish後、必要な依存パッケージがダウンロードされる



エミュレータ or 実機での確認
===============================================================================

実機の場合
-------------------------------------------------------------------------------

.. todo:: 実機での確認手順を書く https://developer.android.com/training/basics/firstapp/running-app?hl=ja#RealDevice



エミュレータの場合
-------------------------------------------------------------------------------
.. todo:: エミュレータでの確認手順を書く https://developer.android.com/training/basics/firstapp/running-app?hl=ja#Emulator



テキストとボタンを作成する
===============================================================================


Layout Editorから設置する
-------------------------------------------------------------------------------

.. todo:: Layout Editor を開く https://developer.android.com/training/basics/firstapp/running-app?hl=ja#Emulator

.. todo:: テキスト ボックスを追加する https://developer.android.com/training/basics/firstapp/building-ui?hl=ja#textbox

.. todo:: ボタンを追加する https://developer.android.com/training/basics/firstapp/building-ui?hl=ja#button



文字列を Translations Editorから得る
-------------------------------------------------------------------------------

.. todo:: UI 文字列を変更する https://developer.android.com/training/basics/firstapp/building-ui?hl=ja#strings


UIの位置を調整する
-------------------------------------------------------------------------------

.. todo:: テキスト ボックスのサイズを柔軟にする https://developer.android.com/training/basics/firstapp/building-ui?hl=ja#flexible




ボタン・入力に反応させる
===============================================================================

.. todo:: 別の Activity を開始する https://developer.android.com/training/basics/firstapp/starting-activity?hl=ja


.. seealso::

    `初めてのアプリの作成  |  Android Developers <https://developer.android.com/training/basics/firstapp/?hl=ja>`_
