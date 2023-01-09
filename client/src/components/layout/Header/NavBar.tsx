import { useState } from 'react'
import Link from 'next/link'

export const NavBar = () => {
  const [lists, setLists] = useState([{ id: 1, title: 'ABOUT', href: '/' }])
  return (
    <nav>
      <ul>
        {lists.map((list) => {
          const { id, title, href } = list

          return (
            <li key={id}>
              <Link href={href}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
