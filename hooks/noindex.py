"""mkdocs-redirects が出すスタブはテーマのテンプレートを通らず、
overrides/main.html の robots メタが入らない。ビルド後に差し込む。
"""

from pathlib import Path

META = '<meta name="robots" content="noindex, nofollow">'


def on_post_build(config, **kwargs):
    for page in Path(config["site_dir"]).rglob("*.html"):
        html = page.read_text(encoding="utf-8")
        if 'name="robots"' in html:
            continue
        page.write_text(html.replace("<head>", f"<head>\n{META}", 1), encoding="utf-8")
