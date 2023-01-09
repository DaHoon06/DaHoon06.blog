import Layout from '@components/layout'
import CONFIG from 'blog.config'

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
      test
    </Layout>
  )
}
