import style from '@styles/profile/profile.module.scss'
import { Typography } from '@components/common/typography/Typography'
import CONFIG from 'blog.config'
import Image from "next/image";

import PROFILE from '@images/profile.png'
import GITHUB from '@images/icons/github.svg'
import TWITTER from '@images/icons/twitter.svg'
import EMAIL from '@images/icons/email.svg'
import Link from "next/link";

export const Profile = () => {
  return (
    <article className={style.profile__container}>
      <section>
        <section className={style.profile__wrapper}>
          <div className={style.profile}>
            <Image src={PROFILE} alt={'profile'} width={100} height={100} />
          </div>
          <Typography variant={'sub1'} fontColor={'black'} fontWeight={'medium'}>
            {CONFIG.profile.name}
          </Typography>
          <Typography variant={'sub2'} fontColor={'gray3'}>
            {CONFIG.profile.role}
          </Typography>
        </section>

        <section className={style.profile__information}>
          <div className={'flex-align-center pb-8'}>
            <Image src={EMAIL} alt={'profile'} width={18} height={18} />
            <Typography className={'pl-8'} variant={'caption'} fontColor={'black'}>
              {CONFIG.profile.email}
            </Typography>
          </div>

          <div className={'flex-align-center pb-8'}>
            <Image src={GITHUB} alt={'profile'} width={18} height={18} />
            <Link href={CONFIG.link.github}>
              <Typography className={'pl-8'} variant={'caption'} fontColor={'black'}>
                {CONFIG.profile.github}
              </Typography>
            </Link>
          </div>

          <div className={'flex-align-center pb-8'}>
            <Image src={TWITTER} alt={'profile'} width={18} height={18} />
            <Link href={CONFIG.link.twitter}>
              <Typography className={'pl-8'} variant={'caption'} fontColor={'black'}>
                {CONFIG.profile.twitter}
              </Typography>
            </Link>
          </div>
        </section>
      </section>
    </article>
  )
}
