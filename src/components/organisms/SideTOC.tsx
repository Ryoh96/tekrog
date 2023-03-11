import {
  faBook,
  faCircle,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback } from 'react'
import styled from 'styled-components'

import useCurrentHeadingIndex from '@/hooks/useCurrentHeadingIndex'
import useHeadingAnchors from '@/hooks/useHeadingAnchors'
import useHeadingElements from '@/hooks/useHeadingElements'
import useHeadingNames from '@/hooks/useHeadingNames'
import useHeadingPositions from '@/hooks/useHeadingPositions'

import SideContent from '../molecules/SideContent'

const Text = styled.p<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? 'darkblue' : '#777')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  margin-top: -0.3em;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    color: darkblue;
    text-decoration: underline;
  }
`

const SideTOCWrapper = styled.div`
  position: sticky;
  top: 30px;
  overflow: hidden;
`

const SideTocTitle = styled.a`
  display: flex;
  align-items: start;
  gap: 0.8em;
`

const IconWrapper = styled.div<{ isActive: boolean; isLast: boolean }>`
  svg {
    font-size: 11px;
    color: ${({ isActive }) => (isActive ? 'darkblue' : '#777')};
  }
  position: relative;

  z-index: 1;
  &::after {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    height: 60px;
    width: 2px;
    background-color: ${({ isLast }) => (isLast ? '#fff' : '#ddd')};
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`
const SideContentInner = styled.div`
  display: grid;
  gap: 0.7em;
`

const SideTOC = () => {
  const headingAnchors = useHeadingAnchors()
  const headingNames = useHeadingNames()
  const headingPositions = useHeadingPositions(headingAnchors)
  const headingElements = useHeadingElements(headingAnchors)
  const headingNum = headingAnchors.length
  const currentHeadingIndex = useCurrentHeadingIndex(
    headingNum,
    headingPositions
  )

  const scrollToHeading = useCallback(
    (index: number) => {
      headingElements[index].scrollIntoView({
        behavior: 'smooth',
      })
    },
    [headingElements]
  )

  return (
    <SideTOCWrapper>
      <SideContent title="目次" icon={<FontAwesomeIcon icon={faBook} />}>
        <SideContentInner>
          {headingNames.map((a, index) => (
            <SideTocTitle key={index} onClick={() => scrollToHeading(index)}>
              <IconWrapper
                isActive={currentHeadingIndex === index ? true : false}
                isLast={index === headingNum - 1 ? true : false}
              >
                <FontAwesomeIcon
                  icon={
                    currentHeadingIndex === index ? faCircleCheck : faCircle
                  }
                />
              </IconWrapper>
              <Text isActive={currentHeadingIndex === index ? true : false}>
                {a[1]}
              </Text>
            </SideTocTitle>
          ))}
        </SideContentInner>
      </SideContent>
    </SideTOCWrapper>
  )
}

export default SideTOC
