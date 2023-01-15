import Layout from '@components/layout'
import CONFIG from 'blog.config'
import { Profile } from '@components/profile/Profile'
import { PostContainer } from '@components/posts'

export default function Home() {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'website',
        url: CONFIG.homepage,
      }}
    >
      <Profile />
      <PostContainer />
    </Layout>
  )
}
