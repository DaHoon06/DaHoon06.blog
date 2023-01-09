import CONFIG from 'blog.config'
import { Typography } from '@components/common/typography/Typography'
import { Img } from '@components/common/image/Img'
import PROFILE from '@Images/profile.png'

export const Logo = () => {
  return (
    <div>
      <div className={'header__profile'}>
        <Img alt={'profile'} src={PROFILE} />
      </div>
      <Typography fontColor={'gray1'}>{CONFIG.profile.github}</Typography>
    </div>
  )
}
