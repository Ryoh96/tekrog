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

const ShareIcons = () => {
  const theme = useTheme()
  return (
    <ShareIconsWrapper>
      {shareListToIcon.map((share) => (
        <RoundedIconButton
          key={share.name}
          bgColor={theme.color.share[share.name]}
          icon={share?.icon as IconDefinition}
          content={share.content}
        />
      ))}
    </ShareIconsWrapper>
  )
}

export default ShareIcons
