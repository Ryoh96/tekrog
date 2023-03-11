import styled from 'styled-components'

import ShareIcons from '../molecules/ShareIcons'

const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const Text = styled.p`
  font-weight: bold;
`

type ShareProps = {
  className?: string
}

const Share = ({ className }: ShareProps) => {
  return (
    <ShareWrapper className={className}>
      <Text>シェア！</Text>
      <ShareIcons />
    </ShareWrapper>
  )
}

export default Share
