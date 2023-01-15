import styled from '@styles/profile/profile.module.scss'
import { Typography } from '@components/common/typography/Typography'
import CONFIG from 'blog.config'
import Image from "next/image";

export const Profile = () => {
  return (
    <article className={styled.profile__container}>
      <section>
        <ul>
          <li>
            <Image src={CONFIG.profile.image} alt={'profile'} width={40} height={40} />
          </li>
          <li>
            <Typography>
              {CONFIG.profile.name}
            </Typography>
          </li>
          <li>
            <Typography>
              {CONFIG.profile.description}
            </Typography>
          </li>
          <li>
            <Typography>
              e-mail: {CONFIG.profile.email}
            </Typography>
          </li>
          <li>
            <Typography>
              github: {CONFIG.profile.github}
            </Typography>
          </li>
          <li>
            <Typography>
              twitter: {CONFIG.profile.twitter}
            </Typography>
          </li>
        </ul>
      </section>
    </article>
  )
}
