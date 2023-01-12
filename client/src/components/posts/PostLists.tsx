import styled from '@styles/posts/posts.module.scss'
import { Tags } from '@components/tag/Tags'
import { Typography } from '@components/common/typography/Typography'
import cn from 'classnames'

export const PostLists = () => {
  return (
    <article className={styled.post__container}>
      <section className={styled.post__wrapper}>
        <Typography
          variant={'h1'}
          fontColor={'black'}
          fontWeight={'semibold'}
          className={cn(styled.post__label, 'w-100')}
        >
          TITLE
        </Typography>

        <Typography
          variant={'caption'}
          fontColor={'gray2'}
          fontWeight={'medium'}
          className={cn(styled.post__label, 'w-100')}
        >
          Jul. 12. 2023
        </Typography>
        <Typography
          variant={'caption'}
          fontColor={'gray2'}
          fontWeight={'medium'}
          className={cn(styled.post__label, 'w-100')}
        >
          Let's load the sitemap
        </Typography>
        <Tags />
      </section>
    </article>
  )
}
