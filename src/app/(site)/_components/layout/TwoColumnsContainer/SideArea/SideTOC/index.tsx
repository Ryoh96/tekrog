'use client'

import { useCallback } from 'react'
import useCurrentHeadingIndex from './_hooks/useCurrentHeadingIndex'
import useHeadingAnchors from './_hooks/useHeadingAnchors'
import useHeadingElements from './_hooks/useHeadingElements'
import useHeadingNames from './_hooks/useHeadingNames'
import useHeadingPositions from './_hooks/useHeadingPositions'
import useSideTOCRefs from './_hooks/useSideTOCRefs'
import SideContent from '../SideContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faCircle,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'
import { usePathname } from 'next/navigation'
import SideGoogleAdsense from '../SideGoogleAdsense'

const SideTOC = () => {
  const path = usePathname()
  const headingAnchors = useHeadingAnchors(path)
  const headingNames = useHeadingNames(path)
  const headingPositions = useHeadingPositions(headingAnchors, path)
  const headingElements = useHeadingElements(headingAnchors, path)
  const headingNum = headingAnchors.length
  const currentHeadingIndex = useCurrentHeadingIndex(
    headingNum,
    headingPositions,
  )

  const scrollToHeading = useCallback(
    (index: number) => {
      const element = headingElements[index]
      element.scrollIntoView({
        behavior: 'smooth',
      })
    },
    [headingElements],
  )

  const [sideContentInnerRef, titleRef] = useSideTOCRefs(
    headingNames,
    currentHeadingIndex,
  )

  return (
    <>
      {headingNames.length !== 0 && (
        <div {...stylex.props(styles.wrapper)} key={path}>
          <SideContent title="目次" icon={<FontAwesomeIcon icon={faBook} />}>
            <div ref={sideContentInnerRef} {...stylex.props(styles.inner)}>
              {headingNames.map((name, index) => (
                <a
                  key={index}
                  onClick={() => scrollToHeading(index)}
                  ref={titleRef.current[index]}
                  {...stylex.props(styles.a)}
                >
                  <span {...stylex.props(styles.iconWrapper)}>
                    <span {...stylex.props(styles.iconBefore)} />
                    <FontAwesomeIcon
                      icon={
                        currentHeadingIndex === index ? faCircleCheck : faCircle
                      }
                      {...stylex.props(
                        styles.icon,
                        currentHeadingIndex === index && styles.iconActive,
                      )}
                    />
                    <span
                      {...stylex.props(
                        styles.iconAfter,
                        index === headingNum - 1 && styles.iconAfterLast,
                      )}
                    />
                  </span>
                  <span
                    {...stylex.props(
                      styles.text,
                      currentHeadingIndex === index && styles.textActive,
                    )}
                  >
                    {name[1]}
                  </span>
                </a>
              ))}
            </div>
          </SideContent>
          <SideGoogleAdsense />
        </div>
      )}
    </>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  wrapper: {
    position: 'sticky',
    top: 30,
    overflow: 'hidden',
    [`@media (max-width:${MQ_SP}px)`]: {
      display: 'none',
    },
  },
  inner: {
    display: 'grid',
    maxHeight: 460,
    overflowX: 'hidden',
    overflowY: 'scroll',
    position: 'relative',
    scrollbarWidth: 'thin',
    scrollbarColor: '#20208b #fff',
    '::-webkit-scrollbar': {
      width: 10,
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: '#eee',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#4228b6',
      boxShadow: 'inset 0 0 6px #fff',
    },
  },
  a: {
    display: 'flex',
    alignItems: 'start',
    gap: '0.8em',
    overflow: 'hidden',
    paddingBottom: '0.7em',
    fontSize: 13,
  },
  icon: {
    fontSize: 11,
    color: '#afc2c4',
    border: '4px solid',
    borderColor: 'transparent',
    borderRadius: '50%',
  },
  iconActive: {
    color: '#5b1cef',
    borderColor: '#ff0',
  },
  iconWrapper: {
    position: 'relative',
    zIndex: 1,
  },
  iconBefore: {
    position: 'absolute',
    display: 'block',
    zIndex: -1,
    height: 20,
    width: 2,
    backgroundColor: '#afc2c4',
    bottom: 10,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  iconAfter: {
    position: 'absolute',
    zIndex: -1,
    display: 'block',
    height: 150,
    width: 2,
    backgroundColor: '#afc2c4',
    top: 10,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  iconAfterLast: {
    width: 5,
    backgroundColor: '#fff',
  },
  text: {
    color: '#777',
    fontWeight: 'normal',
    marginTop: '0.1em',
    transition: 'all 0.3s',
    lineHeight: 1.6,
    ':hover': {
      transform: 'scale(1.05)',
      color: 'darkblue',
      textDecoration: 'underline',
    },
  },
  textActive: {
    color: 'darkblue',
    fontWeight: 'bold',
  },
})

export default SideTOC
