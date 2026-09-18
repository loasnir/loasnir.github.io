# しろへび工房

個人サイト。[Astro](https://astro.build) で `content/` の Markdown を静的サイトに変換し、GitHub Actions から GitHub Pages へデプロイしている。
公開先は <https://loasnir.github.io>。全ページに `noindex, nofollow` を付けている。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
npm run preview  # ビルド結果を確認
```

Docker で動かす場合は `docker build -t loasnir-site . && docker run --rm -p 8080:8080 loasnir-site`。

## 構成

- `content/` — ページの Markdown。frontmatter は `title`（必須）・`description`・`tags`・`aliases`・`showChildren`
- `src/pages/[...slug].astro` — 全ページのルーティング。`foo/index.md` は `/foo/` になり、そのフォルダ配下のページを一覧にする（`showChildren: false` で抑止）
- `src/styles/site.css` — デジタル庁デザインシステムのトークンに合わせた単一スタイル
- `astro.config.mjs` — 旧サイトの URL からのリダイレクト

## 幅の検収

`npm run check:viewports -- <ベースURL> [--screenshots <dir>]` で 360〜1280px の 6 幅 × 全ページを横断し、記事タイトルが画面内にあるか・横スクロールの有無・本文が画面内に収まっているかを判定する（NG があれば exit 1）。
初回のみ `npx playwright install chromium` でブラウザを取得する（`playwright-core` は devDependency にあるがブラウザ本体は含まない）。
既定のベース URL は `http://localhost:8080`、本番を見るときは `https://loasnir.github.io` を渡す。
