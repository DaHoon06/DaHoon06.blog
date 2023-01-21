import { PostLists } from '@components/posts/PostLists'
import { Typography } from '@components/common/typography/Typography'
import { useEffect, useState } from "react";
import style from '@styles/posts/posts.module.scss'
import test from 'posting/test.md';
import md2json from 'md-2-json'


//const test = require('posting/test.md');

import cn from 'classnames'
import { SearchInput } from "@components/search/SearchInput";
import axios from "axios";

export const PostContainer = () => {
  const [count, setCount] = useState<number>(7)

  useEffect(() => {
    console.log(test);
    const blog = test.split('\n')
    const title = blog[0].split('title:')[1]
    const created = blog[1].split('date:')[1]
    const tags = blog[2].split('tags:')[1]
    console.log(title, created, tags);
    console.log(blog);
    const data = md2json.parse(test);
    console.log(data);
  })


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
