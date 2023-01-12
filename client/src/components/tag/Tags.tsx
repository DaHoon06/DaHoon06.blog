import styled from '@styles/posts/tags.module.scss'
import { Typography } from '@components/common/typography/Typography'
import { useState } from 'react'
import cn from 'classnames'

interface Props {
  tags?: string[]
}

export const Tags = (props: Props) => {
  const [tags, setTags] = useState([
    { key: 1, text: 'SEO' },
    { key: 2, text: 'Blog' },
    { key: 3, text: 'NextJs' },
  ])

  return (
    <>
      <ul className={styled.tag__container}>
        {tags.map((value: { key: number; text: string }, index: number) => {
          return (
            <li key={index} className={cn(styled.tag, 'mr-4')}>
              <Typography fontColor={'gray2'} variant={'caption'}>
                {value.text}
              </Typography>
            </li>
          )
        })}
      </ul>
    </>
  )
}
