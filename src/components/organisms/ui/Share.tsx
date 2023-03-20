import styled from 'styled-components'

import ShareIcons from '@/components/molecules/ShareIcons'

const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`

const Text = styled.p`
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 14px;
  }
`

type ShareProps = {
  className?: string
  title: string
  url: string
}

const Share = ({ className, title, url }: ShareProps) => {
  return (
    <ShareWrapper className={className}>
      <Text>シェア！</Text>
      <ShareIcons title={title} url={url} />
    </ShareWrapper>
  )
}

export default Share
