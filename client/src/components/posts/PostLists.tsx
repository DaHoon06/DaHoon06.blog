import styled from '@styles/posts/posts.module.scss'
import { Tags } from '@components/tag/Tags'
import { Typography } from '@components/common/typography/Typography'
import cn from 'classnames'
import Image from 'next/image'

export const PostLists = () => {
  const url = 'https://picsum.photos/300/300'
  return (
    <article className={styled.post__container}>
      <section className={styled.post__wrapper}>
        {/*<div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div><div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div>*/}
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
        {/*<div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div><div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div>*/}
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
        {/*<div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div><div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div>*/}
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
        {/*<div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div><div className={'w-100'}>*/}
        {/*  <Image width={300} height={300} src={url} alt={'thumbnail'} />*/}
        {/*</div>*/}
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
    </article>
  )
}
