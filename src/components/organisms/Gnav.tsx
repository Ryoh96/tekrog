import Link from 'next/link'
import styled from 'styled-components'

const gnavItems = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT', href: '/about' },
  { title: 'CONTACT', href: '/contact' },
]

const GnavList = styled.ul`
  display: flex;
  gap: 40px;
`

const GnavItem = styled.li`
  transition: transform 0.2s;
  position: relative;
  color: #fff;

  &:hover {
    transform: scale(1.2);
  }
`

const Gnav = () => {
  return (
    <GnavList>
      {gnavItems.map((item) => (
        <Link href={item.href} key={item.title}>
          <GnavItem>{item.title}</GnavItem>
        </Link>
      ))}
    </GnavList>
  )
}

export default Gnav
