export function getAllTagsFromPosts (posts) {
  const taggedPosts = posts.filter(post => post?.tags)
  const tags = [...taggedPosts.map(p => p.tags).flat()]
  const tagObj = {}
  tags.forEach(tag => {
    if (tag in tagObj) {
      tagObj[tag]++
    } else {
      tagObj[tag] = 1
    }
  })

  // タグ名でソートした新しいオブジェクトを作成
  const sortedTagObj = Object.fromEntries(
    Object.entries(tagObj).sort(([a], [b]) => a.localeCompare(b))
  )

  return sortedTagObj
}
