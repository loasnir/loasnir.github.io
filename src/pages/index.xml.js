import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { toSlug } from "../slug"

// 旧 Quartz と同じ /index.xml で配信する。フォルダの index ページは目次なので外す
const FEED_FOLDERS = ["career/", "topics/", "stance/", "skills/"]

export async function GET(context) {
  const pages = await getCollection("pages")
  return rss({
    title: "しろへび工房",
    description: "職務経歴・トピック・スタンス・スキルの更新",
    site: context.site,
    items: pages
      .filter((p) => FEED_FOLDERS.some((f) => p.id.startsWith(f)) && toSlug(p.id) === p.id)
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((p) => ({
        title: p.data.title,
        description: p.data.description ?? "",
        link: `/${toSlug(p.id)}/`,
      })),
  })
}
