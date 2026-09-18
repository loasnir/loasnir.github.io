// 旧 Quartz サイトの URL。astro.config.mjs の redirects ではなく自前のページとして
// 出すことで、全ページ共通の noindex, nofollow がスタブにも乗る。
// /resume/index・/posts/index は directory 出力の resume/index.html が同じ内容を返すため挙げていない
export const REDIRECTS: Record<string, string> = {
  resume: "/career/",
  // notes/ をビルド対象から外しているため、旧 /posts はトップに向ける
  posts: "/",
  "stance/policy": "/stance/values/",
  "stance/management-focus": "/stance/focus/",
  "stance/development-focus": "/stance/focus/",
}
