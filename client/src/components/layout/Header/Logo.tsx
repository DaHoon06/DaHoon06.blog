import CONFIG from 'blog.config'
import { Typography } from '@/components/common/typography/Typography'

export const Logo = () => {
  return <Typography>{CONFIG.profile.github}</Typography>
}
