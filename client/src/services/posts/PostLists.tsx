import { TPosts, TTags } from '@/types/TPosts'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PostLists } from '@components/posts/PostLists'

type Props = {
  q: string
  tags: TTags
  posts: TPosts
}

const PostList: React.FC<Props> = ({ q, posts, tags }) => {
  const router = useRouter()
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const currentTag = `${router.query.tag || ''}` || 'All'
  const currentOrder = `${router.query.order || ''}` || 'asc'

  useEffect(() => {
    setFilteredPosts(() => {
      let filteredPosts = posts

      filteredPosts = filteredPosts.filter((post) => {
        const tagContent = post.tags ? post.tags.join(' ') : ''
        const searchContent = post.title + post.summary + tagContent
        return searchContent.toLowerCase().includes(q.toLowerCase())
      })
      // tag
      if (currentTag !== 'All') {
        filteredPosts = filteredPosts.filter(
          (post) => post && post.tags && post.tags.includes(currentTag)
        )
      }
      // order
      if (currentOrder !== 'asc') {
        filteredPosts = filteredPosts.reverse()
      }

      return filteredPosts
    })
  }, [q, currentTag, currentOrder])

  return (
    <>
      <div className="my-2">
        {!filteredPosts.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        {filteredPosts.slice(0, 20).map((post) => (
          <PostLists key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostList
