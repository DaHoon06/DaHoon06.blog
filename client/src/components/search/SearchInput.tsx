import { Typography } from "@components/common/typography/Typography";
import style from '@styles/search/search.module.scss'
import React from "react";

export const SearchInput = () => {

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('롸');
  }
  return (
    <article className={style.search__container}>
      <div className={'flex-align-center'}>
        <span className={'pr-4'}>🔎</span>
        <Typography variant={'sub1'} fontColor={'black'} fontWeight={'medium'}>Search</Typography>
      </div>
      <form onSubmit={search}>
        <input placeholder={'search keyword...'} className={style.search__input} type={'text'} />
      </form>
    </article>
  )
}
