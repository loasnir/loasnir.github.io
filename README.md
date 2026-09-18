# しろへび工房

個人サイト。[mdBook](https://rust-lang.github.io/mdBook/) で `content/` の Markdown を静的サイトに変換し、GitHub Actions から GitHub Pages へデプロイしている。
公開先は <https://loasnir.github.io>。全ページに `noindex, nofollow` を付けている。

## 開発

```sh
# mdBook 0.5.4 を PATH に置いてから
./bin/build                              # book/ に出力
python3 -m http.server 8080 -d book      # http://localhost:8080
```

`bin/build` は `mdbook build` を呼んだあと、リダイレクトのスタブに robots メタを差し込む（スタブはテーマを通らないため）。
Docker で動かす場合は `docker build -t loasnir-site . && docker run --rm -p 8080:8080 loasnir-site`。

## 構成

- `content/` — ページの Markdown。frontmatter は他の生成器と共用できるよう残してあり、mdBook では preprocessor が処理する
- `content/SUMMARY.md` — 章立て。mdBook はこれを目次とサイドバーに使う
- `preprocessors/frontmatter.rb` — frontmatter を落とし、`title` をページ先頭の h1 に変換する
- `book.toml` — テーマ設定と、旧 URL からのリダイレクト
- `theme/head.hbs` — 全ページに `noindex, nofollow` を足すためだけのテーマ部分上書き
- デザインは mdBook のデフォルト。カスタム CSS は持たない

## 幅の検収

`npm run check:viewports -- <ベースURL> [--screenshots <dir>]` で 360〜1280px の 6 幅 × 全ページを横断し、記事タイトルが画面内にあるか・横スクロールの有無・本文が画面内に収まっているかを判定する（NG があれば exit 1）。
初回のみ `npm install` と `npx playwright install chromium` が要る。
