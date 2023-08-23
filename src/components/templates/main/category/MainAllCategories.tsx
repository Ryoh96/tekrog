import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import type { GetAllCategoriesPageQuery } from '@/graphql/generated/request'

import MainIconTitle from '../common/MainIconTitle'

type MainAllCategoriesProps = {
  nodes: NonNullable<GetAllCategoriesPageQuery['mainCategory']>['nodes']
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
  box-shadow: ${({ theme }) => theme.boxShadow.near};
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: ${({ theme }) => theme.boxShadow.far};
  }
`

const Text = styled.p`
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    font-size: 20px;
  }
`

const MainAllCategories = ({ nodes }: MainAllCategoriesProps) => {
  const url = nodes.map((node) =>
    node.uri && node.uri.split('/').length === 5
      ? node.uri.slice(node.uri.indexOf('/', node.uri.indexOf('/') + 1))
      : node.uri
  )
  return (
    <>
      <MainIconTitle icon={<FontAwesomeIcon icon={faComputer} />}>
        カテゴリー一覧
      </MainIconTitle>
      <FlexWrapper>
        {nodes.map((node, index) => (
          <Link key={index} href={url[index] ?? ''}>
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
