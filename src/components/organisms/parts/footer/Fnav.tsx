import Link from 'next/link'
import styled from 'styled-components'

const fnavItems = [
  {
    name: 'HOME',
    link: '/',
  },
  {
    name: 'プライバシーポリシー',
    link: '/privacy-policy',
  },
  {
    name: 'お問い合わせ',
    link: '/contact',
  },
]

const FnavList = styled.ul`
  display: flex;
  gap: 20px;
  height: 64px;
  place-items: center;
`

const FnavItem = styled.li`
  transition: transform 0.2s;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`

const Fnav = () => {
  return (
    <FnavList>
      {fnavItems.map((item) => (
        <Link href={item.link} key={item.name}>
          <FnavItem >{item.name}</FnavItem>
        </Link>
      ))}
    </FnavList>
  )
}

export default Fnav
