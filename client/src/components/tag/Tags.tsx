import styled from '@styles/posts/tags.module.scss'
import { Typography } from '@components/common/typography/Typography'
import { useState } from 'react'

export const Tags = () => {
  const [tags, setTags] = useState<number[]>([1, 2, 3, 4, 5])

  return (
    <>
      <ul className={styled.tag__container}>
        {tags.map((value: number, index: number) => {
          return (
            <li key={index} className={styled.tag}>
              <Typography fontColor={'gray2'} variant={'caption'}>
                {value}
              </Typography>
            </li>
          )
        })}
      </ul>
    </>
  )
}
