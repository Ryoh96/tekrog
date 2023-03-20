import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback } from 'react'
import styled from 'styled-components'

const Button = styled.div`
  z-index: 10;
  font-size: 30px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  display: inline-grid;
  place-content: center;
  color: #00008b;
  border: 3px solid #00008b;
  transition: 0.5s;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 30px;
  }
`
const Anchor = styled.a``

const PageTopButton = () => {
  const toPageTop = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.body.scrollIntoView({
      // behavior: 'smooth'
    })
  }, [])
  return (
    <Anchor href="#" onClick={toPageTop}>
      <Button>
        <FontAwesomeIcon icon={faChevronUp} />
      </Button>
    </Anchor>
  )
}

export default PageTopButton
