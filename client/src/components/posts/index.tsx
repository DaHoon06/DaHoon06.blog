import { PostLists } from '@components/posts/PostLists'
import { Typography } from '@components/common/typography/Typography'
import { useState } from 'react'

export const PostContainer = () => {
  const [count, setCount] = useState<number>(7)

  return (
    <>
      <section>
        <div className={'flex-justify-between'}>
          <div className={'flex'}>
            <Typography>All Posts</Typography>
            <Typography>{count}</Typography>
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
