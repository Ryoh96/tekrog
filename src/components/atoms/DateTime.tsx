import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import formatDate from '../../utils/formatDate'

type DateTimeProps = {
  children: string
  className?: string
}

const DateTimeWrapper = styled.div<{ className?: string }>`
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: #333;
  width: 10em;
  align-items: center;
`

const IconWrapper = styled.div`
  svg {
    font-size: 14px;
    color: #333;
  }
`

const DateTime = ({ children, className }: DateTimeProps) => {
  return (
    <DateTimeWrapper className={className}>
      <IconWrapper>
        <FontAwesomeIcon icon={faClock} />
      </IconWrapper>
      <time dateTime={children}>{formatDate(children)}</time>
    </DateTimeWrapper>
  )
}

export default DateTime
