import {
  faBook,
  faCircle,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback } from 'react'
import styled from 'styled-components'

import PageBottomButton from '@/components/atoms/PageBottomButton'
import PageTopButton from '@/components/atoms/PageTopButton'
import _SideContent from '@/components/molecules/SideContent'
import GoogleAdsense from '@/components/organisms/adsense/GoogleAdsense'
import useCurrentHeadingIndex from '@/hooks/useCurrentHeadingIndex'
import useHeadingAnchors from '@/hooks/useHeadingAnchors'
import useHeadingElements from '@/hooks/useHeadingElements'
import useHeadingNames from '@/hooks/useHeadingNames'
import useHeadingPositions from '@/hooks/useHeadingPositions'
import useSideTOCRefs from '@/hooks/useSideTOCRefs'

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
`

const SideContent = styled(_SideContent)`
  margin-bottom: 20px;
`

const Text = styled.p<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? 'darkblue' : '#777')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  margin-top: 0.1em;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    display: none;
  }
`

const SideTocTitle = styled.a`
  display: flex;
  align-items: start;
  gap: 0.8em;
  overflow: hidden;
  padding-bottom: 0.7em;
  font-size: 13px;
`

const IconWrapper = styled.div<{ isActive: boolean; isLast: boolean }>`
  svg {
    font-size: 11px;
    color: ${({ isActive }) => (isActive ? '#5b1cef' : '#afc2c4')};
    border: 4px solid;
    border-color: ${({ isActive }) => (isActive ? '#ff0' : 'transparent')};
    border-radius: 50%;
  }
  position: relative;

  z-index: 1;
  &::before {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    height: 20px;
    width: 2px;
    background-color: #afc2c4;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &::after {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    height: 150px;
    width: ${({ isLast }) => (isLast ? '5px' : '2px')};
    background-color: ${({ isLast }) => (isLast ? '#fff' : '#afc2c4')};
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`
const SideContentInner = styled.div`
  display: grid;
  /* gap: 0.7em; */
  max-height: 460px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #20208b #fff;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4228b6;
    box-shadow: inset 0 0 6px #fff;
  }

  &::-webkit-scrollbar-corner {
  }
`
const PageTopButtonText = styled.p`
  color: #fff;
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
      const element = headingElements[index]
      element.scrollIntoView({
        // behavior: "smooth"
      })
    },
    [headingElements]
  )

  const [sideContentInnerRef, titleRef] = useSideTOCRefs(
    headingNames,
    currentHeadingIndex
  )

  return (
    <SideTOCWrapper>
      <SideContent title="目次" icon={<FontAwesomeIcon icon={faBook} />}>
        <SideContentInner ref={sideContentInnerRef}>
          {headingNames.map((a, index) => (
            <SideTocTitle
              key={index}
              onClick={() => scrollToHeading(index)}
              ref={titleRef.current[index]}
            >
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
      <ButtonsWrapper>
        <PageTopButtonText>Page Top</PageTopButtonText>
        <PageTopButton />
      </ButtonsWrapper>
      <GoogleAdsense
        style={{
          display: 'inline-block',
          width: '324px',
          height: '270px',
        }}
        slot="6447253650"
      />
    </SideTOCWrapper>
  )
}

export default SideTOC
