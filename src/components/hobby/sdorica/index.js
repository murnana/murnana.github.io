import React from "react"
import Header from "./header"
import InfoBox from "./info-box"

export default ({ title, site, siteName, ruby }) => (
  <div
    style={{
      backgroundColor: "rgb(255, 242, 218)",
      fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
    }}
  >
    <Header title={title} site={site} siteName={siteName} ruby={ruby} />
    <div style={{ padding: "0.5rem" }}>
      <p>※公式っぽくしてますが非公式ページです！</p>
      <InfoBox title="概要">
        <table style={{ marginBottom: "1rem" }}>
          <tbody>
            <tr>
              <td>ジャンル</td>
              <td>ファンタジー ストラテジー RPG</td>
            </tr>
            <tr>
              <td>プラットフォーム</td>
              <td>iOS/Android</td>
            </tr>
            <tr>
              <td>ディベロッパー・パブリッシャー</td>
              <td>Rayark</td>
            </tr>
            <tr>
              <td>アプリ内課金</td>
              <td>あり: 仮想通貨「ジェム」</td>
            </tr>
            <tr>
              <td>クライアント開発ツール</td>
              <td>Unity</td>
            </tr>
          </tbody>
          <tl></tl>
        </table>
        <p>
          プレイヤーは「観察者」として、「万象の書」を通じてファンタジーの世界「ヴァンダクティ大陸」を見守っていく。
        </p>
      </InfoBox>
      <InfoBox title="システム - 戦闘">
        <p>
          バトル中、パーティは前衛の「金」、アタッカーの「黒」、サポートの「白」の3人で構成される。
        </p>
        <p style={{ paddingTop: "1rem" }}>
          戦闘時はパズル要素として「ソウル」を消費することでスキルを発動する。
        </p>
        <p style={{ paddingTop: "1rem" }}>
          「ソウル」の消費の仕方はキャラによってまちまちだが、大体は1ソウル、縦または横に2ソウル、4つの箱型で消費する4ソウルが主流(ここのところ例外も出てきた)。
        </p>
        <p style={{ paddingTop: "1rem" }}>
          難しい戦闘の大半は、スキルや状態異常を活かした戦略が必要になる。(あんまりかくと面白味がなくなっちゃうので、詳しくは書かない)
        </p>
      </InfoBox>
      <InfoBox title="システム - キャラクター育成">
        <p>
          キャラクター(ゲーム中では「魂のしおり」)にはレアリティが存在する。下から順にN,
          R, SR, そしてSSR。
        </p>
        <p style={{ paddingTop: "1rem" }}>
          すべてのキャラクターがSSRまでランクアップ可能。
          (ゲーム中、ランクアップは「共鳴」と呼ばれる)
        </p>
        <p style={{ paddingTop: "1rem" }}>
          また、レアリティとは別にレベルが存在する。レベルはレアリティとは別になっているので、ランクアップしていない状態でも問題ない。
        </p>
        <p style={{ paddingTop: "1rem" }}>
          レベルはプレイヤーのレベル(観察者レベルと呼ばれる)より上にあげることができない。
        </p>
      </InfoBox>
    </div>
  </div>
)
