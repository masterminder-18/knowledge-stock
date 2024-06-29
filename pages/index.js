import { clientConfig } from '@/lib/server/config'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import { useConfig } from '@/lib/config'
import SearchLayout from '@/layouts/search'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, clientConfig.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > clientConfig.postsPerPage
  const tags = getAllTagsFromPosts(posts)

  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      tags,
    },
    revalidate: 1
  }
}

export default function Blog ({ postsToShow, page, showNext,tags}) {
  const { title, description } = useConfig()

  return (
    <Container title={title} description={description}>
      <SearchLayout tags={tags} posts={postsToShow} />

      {/* {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))} */}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}
