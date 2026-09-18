# しろへび工房

個人サイト。[MkDocs Material](https://squidfunk.github.io/mkdocs-material/) で `content/` の Markdown を静的サイトに変換し、GitHub Actions から GitHub Pages へデプロイしている。
公開先は <https://loasnir.github.io>。全ページに `noindex, nofollow` を付けている。

## 開発

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve     # http://localhost:8000
.venv/bin/mkdocs build     # site/ に出力
```

Docker で動かす場合は `docker build -t loasnir-site . && docker run --rm -p 8080:8080 loasnir-site`。

## 構成

- `content/` — ページの Markdown。frontmatter は `title`・`description`・`tags`
- `mkdocs.yml` — ナビ・テーマ・プラグイン（検索 / タグ / RSS / 旧 URL のリダイレクト）
- `overrides/main.html` — 全ページに `noindex, nofollow` を足すためだけのテンプレート上書き
- `hooks/noindex.py` — リダイレクトのスタブはテーマを通らないので、ビルド後に同じメタを差し込む
- デザインは Material のデフォルト。カスタム CSS は持たない

## 幅の検収

`npm run check:viewports -- <ベースURL> [--screenshots <dir>]` で 360〜1280px の 6 幅 × 全ページを横断し、記事タイトルが画面内にあるか・横スクロールの有無・本文が画面内に収まっているかを判定する（NG があれば exit 1）。
初回のみ `npm install` と `npx playwright install chromium` が要る。
既定のベース URL は `http://localhost:8080`（`python3 -m http.server 8080 --directory site` 相当）、本番を見るときは `https://loasnir.github.io` を渡す。
