import { PostLists } from '@components/posts/PostLists'
import { Typography } from '@components/common/typography/Typography'
import { useState } from 'react'
import styled from '@styles/posts/posts.module.scss'

import cn from 'classnames'

export const PostContainer = () => {
  const [count, setCount] = useState<number>(7)

  return (
    <>
      <section className={styled.post__index}>
        <div
          className={cn(styled.post__wrapper__label, 'flex-justify-between')}
        >
          <div className={'flex'}>
            <Typography
              variant={'sub1'}
              fontColor={'black'}
              fontWeight={'bold'}
            >
              All Posts
            </Typography>
            <Typography
              variant={'sub2'}
              fontColor={'black'}
              fontWeight={'bold'}
            >
              {count}
            </Typography>
          </div>
          <div className={'flex'}>
            <Typography>Desc</Typography>
            <Typography>Asc</Typography>
          </div>
        </div>
        <hr />

        <PostLists />
      </section>
    </>
  )
}
