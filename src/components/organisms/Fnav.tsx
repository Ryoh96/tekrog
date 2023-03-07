import styled from 'styled-components'

const fnavItems = ['HOME', 'プライバシーポリシー', 'お問い合わせ']

const FnavList = styled.ul`
  display: flex;
  gap: 20px;
  height: 64px;
  place-items: center;
`

const FnavItem = styled.li`
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.2);
  }
`

const Fnav = () => {
  return (
    <FnavList>
      {fnavItems.map((item) => (
        <FnavItem key={item}>{item}</FnavItem>
      ))}
    </FnavList>
  )
}

export default Fnav
