import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import MainIconTitle from '../common/MainIconTitle'

type MainAllCategoriesProps = {
  nodes: {
    name: string
    uri: string
    slug: string
  }[]
}

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const TextWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`

const Text = styled.p`
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 20px;
  }
`

const MainAllCategories = ({ nodes }: MainAllCategoriesProps) => {
  return (
    <>
      <MainIconTitle icon={<FontAwesomeIcon icon={faComputer} />}>
        カテゴリー
      </MainIconTitle>
      <FlexWrapper>
        {nodes.map((node, index) => (
          <Link key={index} href={node.uri}>
            <TextWrapper>
              <Image
                src={`/ttl-${node.slug}.png`}
                alt=""
                height={44}
                width={44}
                style={{ objectFit: 'contain' }}
              />
              <Text>{node.name}</Text>
            </TextWrapper>
          </Link>
        ))}
      </FlexWrapper>
    </>
  )
}

export default MainAllCategories