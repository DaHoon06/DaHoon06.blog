import styled from '@styles/posts/posts.module.scss'
import { Tags } from '@components/tag/Tags'
import { Typography } from '@components/common/typography/Typography'
import cn from 'classnames'

export const PostLists = () => {
  return (
    <article className={styled.post__container}>
      <section className={styled.post__wrapper}>
        <div className={'w-100'}>
          <img src={'https://picsum.photos/300/300'} alt={'thumbnail'} />
        </div>
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
      <section className={styled.post__wrapper}>
        <div>THUMBNAIL</div>
        <div>TITLE</div>
        <div>CREATED_DATE</div>
        <div>DESCRIPTION</div>
        <Tags />
      </section>
      <section className={styled.post__wrapper}>
        <div className={'w-100'}>
          <img src={'https://picsum.photos/300/300'} alt={'thumbnail'} />
        </div>
        <div>
          <Typography
            variant={'h2'}
            fontColor={'black'}
            fontWeight={'semibold'}
          >
            TITLE
          </Typography>
        </div>
        <div>
          <Typography
            variant={'caption'}
            fontColor={'gray2'}
            fontWeight={'medium'}
          >
            Jul. 12. 2023
          </Typography>
        </div>
        <div>
          <Typography
            variant={'caption'}
            fontColor={'gray2'}
            fontWeight={'medium'}
          >
            Let's load the sitemap
          </Typography>
        </div>
        <Tags />
      </section>
      <section className={styled.post__wrapper}>
        <div>THUMBNAIL</div>
        <div>TITLE</div>
        <div>CREATED_DATE</div>
        <div>DESCRIPTION</div>
        <Tags />
      </section>
    </article>
  )
}
