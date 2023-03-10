import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type DateTimeProps = {
  date: string
  className?: string
}

const DateTimeWrapper = styled.div<{ className?: string }>`
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: #333;
  width: 10em;
`

const DateTime = ({ date, className }: DateTimeProps) => {
  return (
    <DateTimeWrapper className={className}>
      <FontAwesomeIcon icon={faClock} />
      <p>{date}</p>
    </DateTimeWrapper>
  )
}

export default DateTime
