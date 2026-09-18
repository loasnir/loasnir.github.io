# Quartz v5

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## 幅の検収

`npm run check:viewports -- <ベースURL> [--screenshots <dir>]` で 360〜1280px の 6 幅を横断し、記事タイトルが画面内にあるか・サイドバーが本文を押し出していないか・横スクロールの有無・本文幅を判定する（NG があれば exit 1）。
初回のみ `npx playwright install chromium` でブラウザを取得する（`playwright-core` は devDependency にあるがブラウザ本体は含まない）。
既定のベース URL は `http://localhost:8080`、本番を見るときは `https://loasnir.github.io` を渡す。

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>
