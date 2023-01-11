import styled from '@styles/posts/posts.module.scss'
import { Tags } from '@components/tag/Tags'

export const PostLists = () => {
  return (
    <article className={styled.post__wrapper}>
      <div>THUMBNAIL</div>
      <div>TITLE</div>
      <div>CREATED_DATE</div>
      <div>DESCRIPTION</div>
      <Tags />
    </article>
  )
}
