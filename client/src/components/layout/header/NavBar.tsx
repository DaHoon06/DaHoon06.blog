import { useState } from 'react'
import Link from 'next/link'
import { Typography } from '@components/common/typography/Typography'

export const NavBar = () => {
  const [lists, setLists] = useState([
    { id: 1, title: 'HOME', href: '/' },
    { id: 2, title: 'ABOUT', href: '/about' },
  ])
  return (
    <nav>
      <ul className={'flex'}>
        {lists.map((list) => {
          const { id, title, href } = list

          return (
            <li key={id} className={'pl-8'}>
              <Link href={href}>
                <Typography fontColor={'gray1'} fontWeight={'medium'}>
                  {title}
                </Typography>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
