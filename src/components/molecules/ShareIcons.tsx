import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import styled, { useTheme } from 'styled-components'

import { shareListToIcon } from '@/constants/share'

import RoundedIconButton from '../atoms/RoundedIconButton'

const ShareIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`

type ShareIconsProps = {
  url: string
  title: string
}

const ShareIcons = ({ url, title }: ShareIconsProps) => {
  const theme = useTheme()
  return (
    <ShareIconsWrapper>
      {shareListToIcon.map((share) => (
        <a
          href={share.href(url, title)}
          key={share.name}
          target="_blank"
          rel="nofollow noopener"
        >
          <RoundedIconButton
            bgColor={theme.color.share[share.name]}
            icon={share?.icon as IconDefinition}
            content={share.content}
          />
        </a>
      ))}
    </ShareIconsWrapper>
  )
}

export default ShareIcons
