import { getCollection } from "astro:content"
import { toSlug } from "../slug"

// @astrojs/sitemap は sitemap-index.xml + sitemap-0.xml の 2 段で出すため、
// 旧 Quartz と同じ /sitemap.xml 1 枚にしたくて自前で組んでいる。
// noindex 運用なので robots.txt からは参照せず、購読・自分用の一覧として置く
export async function GET(context) {
  const pages = await getCollection("pages")
  const tags = [...new Set(pages.flatMap((p) => p.data.tags ?? []))].sort()
  const urls = [
    ...pages.map((p) => `/${toSlug(p.id) ? `${toSlug(p.id)}/` : ""}`),
    "/tags/",
    ...tags.map((t) => `/tags/${t}/`),
  ].sort()
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${new URL(u, context.site)}</loc></url>`).join("\n")}
</urlset>
`
  return new Response(body, { headers: { "Content-Type": "application/xml" } })
}
