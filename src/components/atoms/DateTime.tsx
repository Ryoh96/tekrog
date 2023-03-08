import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type DateProps = {
  date: string
}

const DateTimeWrapper = styled.div`
  display: flex;
  gap: 6px;
  font-size: 12px;
  color: #333;
`

const DateTime = ({ date }: DateProps) => {
  return (
    <DateTimeWrapper>
      <FontAwesomeIcon icon={faClock} />
      <p>{date}</p>
    </DateTimeWrapper>
  )
}

export default DateTime
