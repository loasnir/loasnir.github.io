// @ts-check
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://loasnir.github.io",
  // 旧 Quartz サイトの URL。alias-redirects プラグインが出していたものを引き継ぐ。
  // /resume/index・/posts/index は directory 出力の resume/index.html が同じ内容を返すため挙げていない
  redirects: {
    "/resume": "/career/",
    "/posts": "/notes/",
    "/stance/policy": "/stance/values/",
    "/stance/management-focus": "/stance/focus/",
    "/stance/development-focus": "/stance/focus/",
  },
})
