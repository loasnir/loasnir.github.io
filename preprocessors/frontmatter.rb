#!/usr/bin/env ruby
# mdBook は YAML frontmatter を解釈せず、そのまま本文に出してしまう。
# content/ は他の生成器でも読めるように無改変で置いておきたいので、
# ビルド時にここで frontmatter を落とし、title を h1 に変換する。
require "json"

def strip(text)
  m = text.match(/\A---\n(.*?)\n---\n+/m)
  return text unless m
  title = m[1][/^title:\s*(.+)$/, 1]&.strip
  body = m.post_match
  title ? "# #{title}\n\n#{body}" : body
end

def walk(items)
  Array(items).each do |item|
    ch = item["Chapter"] or next
    ch["content"] = strip(ch["content"])
    walk(ch["sub_items"])
  end
end

exit 0 if ARGV[0] == "supports"

_context, book = JSON.parse($stdin.read)
walk(book["items"])
print JSON.generate(book)
