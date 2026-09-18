import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // 旧サイトの URL。astro.config.mjs の redirects が実体で、ここは記録として残している
    aliases: z.array(z.string()).optional(),
    // フォルダの index ページに子ページ一覧を出すか。本文に一覧を持つページで false にする
    showChildren: z.boolean().default(true),
  }),
})

export const collections = { pages }
