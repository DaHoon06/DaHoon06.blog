import Layout from '@components/layout'
import CONFIG from 'blog.config'
import { Categories } from '@components/categories/Categories'
import { PostContainer } from '@components/posts'

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
      <PostContainer />
    </Layout>
  )
}
