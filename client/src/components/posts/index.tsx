import { PostLists } from '@components/posts/PostLists'
import { Typography } from '@components/common/typography/Typography'
import { useEffect, useState } from "react";
import style from '@styles/posts/posts.module.scss'
import test from '../../../../posts/test.md';

import cn from 'classnames'
import { SearchInput } from "@components/search/SearchInput";
import axios from "axios";

export const PostContainer = () => {
  const [count, setCount] = useState<number>(7)

  useEffect(() => {
    const data = JSON.stringify(test)
    console.log(data);
  })



  const apiTest = async () => {
    try {
      const { data } = await axios.get('https://github.com/DaHoon06/DaHoon06.blog/blob/main/posts/test.md');
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <section className={style.post__index}>
        <SearchInput />
        <button type={'button'} onClick={apiTest}>TEST</button>
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
