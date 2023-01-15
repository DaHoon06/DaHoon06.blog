import { PostLists } from '@components/posts/PostLists'
import { Typography } from '@components/common/typography/Typography'
import { useState } from 'react'
import style from '@styles/posts/posts.module.scss'

import cn from 'classnames'
import { SearchInput } from "@components/search/SearchInput";

export const PostContainer = () => {
  const [count, setCount] = useState<number>(7)

  return (
    <>
      <section className={style.post__index}>
        <SearchInput />
        <div
          className={cn(style.post__wrapper__label, 'flex-justify-between')}
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
