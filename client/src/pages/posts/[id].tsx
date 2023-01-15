import getAllPostsIds from '@lib/posts'
import Layout from "@components/layout";
import CONFIG from "../../../blog.config";

export async function getStaticPaths() {
  const paths = getAllPostsIds
  return {
    paths,
    fallback: false
  }
}

const Post = () => {
  return (
    <Layout metaConfig={
      {
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'website',
        url: CONFIG.homepage,
      }
    }>
    TEST
    </Layout>
  )
}

