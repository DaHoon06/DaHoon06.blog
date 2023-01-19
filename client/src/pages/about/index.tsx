import Layout from '@components/layout'
import CONFIG from '../../../blog.config'
import { MyProfile } from '@components/profile/MyProfile'

const About = () => {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: 'website',
        url: CONFIG.homepage,
      }}
    >
      <MyProfile />
    </Layout>
  )
}
export default About
