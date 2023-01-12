import { useState } from 'react'
import Link from 'next/link'
import { Typography } from '@components/common/typography/Typography'

export const NavBar = () => {
  const [lists, setLists] = useState([{ id: 1, title: 'ABOUT', href: '/' }])
  return (
    <nav>
      <ul>
        {lists.map((list) => {
          const { id, title, href } = list

          return (
            <li key={id}>
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
