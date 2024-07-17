import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'
import Container from '@/components/Container'

export default function search ({ tags, posts }) {
  return (
    <Container title={`search`} description={`search posts`}>
      <SearchLayout tags={tags} posts={posts} />
    </Container>
  )
}
export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}
