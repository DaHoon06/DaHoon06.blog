import CONFIG from 'blog.config'
import { Typography } from '@components/common/typography/Typography'
import PROFILE from '@images/profile.png'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div>
      <Typography fontColor={'gray1'}>{CONFIG.blog.title}</Typography>
    </div>
  )
}
