import styled from '@styles/categories/category.module.scss'
import { Typography } from '@components/common/typography/Typography'

export const Categories = () => {
  return (
    <>
      <article className={styled.category__container}>
        <Typography
          variant={'sub2'}
          fontColor={'black'}
          fontWeight={'semibold'}
        >
          Tags
        </Typography>
        <ul>
          <li>
            <Typography
              variant={'sub2'}
              fontColor={'gray3'}
              fontWeight={'medium'}
            >
              SEO
            </Typography>
          </li>
          <li>
            <Typography
              variant={'sub2'}
              fontColor={'gray3'}
              fontWeight={'medium'}
            >
              Blog
            </Typography>
          </li>
          <li>
            <Typography
              variant={'sub2'}
              fontColor={'gray3'}
              fontWeight={'medium'}
            >
              NextJs
            </Typography>
          </li>
        </ul>
      </article>
    </>
  )
}
