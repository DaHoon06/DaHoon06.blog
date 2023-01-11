import Layout from '@components/layout'
import CONFIG from 'blog.config'
import { PostLists } from '@components/posts/PostLists'
import { Categories } from '@components/categories/Categories'

export default function Home() {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'website',
        url: CONFIG.link,
      }}
    >
      <Categories />
      <PostLists />
    </Layout>
  )
}
