import CONFIG from 'blog.config'
import { Typography } from "@components/common/typography/Typography";
import style from '@styles/layout/footer.module.scss'

export const Footer = () => {
  return (
    <footer className={style.footer__container}>
      <Typography variant={'caption'} fontWeight={'bold'} fontColor={'gray3'}>
        {CONFIG.blog.copyright}
      </Typography>
    </footer>
  )
}
