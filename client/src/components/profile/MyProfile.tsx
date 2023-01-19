import style from '@styles/profile/profile.module.scss'
import { Typography } from '@components/common/typography/Typography'
import CONFIG from 'blog.config'

export const MyProfile = () => {
  return (
    <article className={style.my__Profile}>
      <section>
        <ul>
          <li>
            <Typography>{CONFIG.profile.image}</Typography>
          </li>
          <li>
            <Typography>{CONFIG.profile.name}</Typography>
          </li>
          <li>
            <Typography>{CONFIG.profile.email}</Typography>
          </li>
          <li>
            <Typography>{CONFIG.profile.github}</Typography>
          </li>
          <li>
            <Typography>{CONFIG.profile.twitter}</Typography>
          </li>
        </ul>
      </section>
      <section>
        <Typography>{CONFIG.profile.desc}</Typography>
      </section>
      <section>
        <ul>
          {CONFIG.projects.map((list, index) => {
            return <li key={index}>{list.name}</li>
          })}
        </ul>
      </section>
    </article>
  )
}
