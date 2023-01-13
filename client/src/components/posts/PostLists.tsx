import styled from '@styles/posts/posts.module.scss'
import { Tags } from '@components/tag/Tags'
import { Typography } from '@components/common/typography/Typography'
import cn from 'classnames'
import React from 'react'
import MarkDown from '@components/markdown/MarkdownRender'

type Props = {
  post: any
}

export const PostLists: React.FC<Props> = ({ post }) => {
  console.log(post)
  return (
    <article className={styled.post__container}>
      <MarkDown />

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
