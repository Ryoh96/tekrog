import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styled from 'styled-components'

import NumericPagerItem from '@/components/atoms/NumericPagerItem'

type NumericPagerProps = {
  total: number
  current: number
}

const NumericPagerWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

const NumericPager = ({ total, current }: NumericPagerProps) => {
  return (
    <NumericPagerWrapper>
      {current !== 1 && (
        <Link href="/">
          <NumericPagerItem>
            <FontAwesomeIcon icon={faBackward} />
          </NumericPagerItem>
        </Link>
      )}
      {[...Array(total)].map((_, index) => (
        <Link href={index === 0 ? '/' :`/page/${index + 1}`} key={index}>
          <NumericPagerItem current={current === index + 1 ? true : false}>
            {index + 1}
          </NumericPagerItem>
        </Link>
      ))}
      {current !== total && (
        <Link href={`page/${total}`}>
          <NumericPagerItem>
            <FontAwesomeIcon icon={faForward} />
          </NumericPagerItem>
        </Link>
      )}
    </NumericPagerWrapper>
  )
}

export default NumericPager
