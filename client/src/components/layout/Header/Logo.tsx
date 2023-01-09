import CONFIG from 'blog.config'
import { Typography } from '@components/common/typography/Typography'
import PROFILE from '@images/profile.png'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <div className={'header__profile'}>
        <Image src={PROFILE} alt={'profile'} width={40} height={40} />
      </div>
      <Typography fontColor={'gray1'}>{CONFIG.profile.github}</Typography>
    </div>
  )
}
