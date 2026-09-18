// glob loader は content/foo/index.md の id を "foo" に、content/index.md を "index" にする。
// どちらの形でも拾えるように両方を潰して URL 用のスラッグにする
export function toSlug(id: string): string | undefined {
  const s = id.replace(/(^|\/)index$/, "")
  return s === "" ? undefined : s
}
