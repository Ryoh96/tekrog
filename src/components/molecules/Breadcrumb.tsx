import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import PageContainer from './../layout/PageContainer'

const BreadcrumbWrapper = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    padding: 14px 20px;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.06);
    text-decoration: underline;
  }
`

const Title = styled.p`
  margin-top: 0.2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.sp}px) {
    max-width: 130px;
  }
`

const IconWrapper = styled.div``

type BreadcrumbProps = {
  breadcrumbList: {
    name: string
    href: string
  }[]
}

const Breadcrumb = ({ breadcrumbList }: BreadcrumbProps) => {
  const list = [{ name: 'ホーム', href: '/' }, ...breadcrumbList]
  return (
    <PageContainer>
      <BreadcrumbWrapper>
        {list.map((item, index) => (
          <StyledLink key={index} href={item.href}>
            {index === 0 && (
              <IconWrapper>
                <FontAwesomeIcon icon={faHome} />
              </IconWrapper>
            )}
            <Title>{item.name}</Title>
            {index !== list.length - 1 && (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </StyledLink>
        ))}
      </BreadcrumbWrapper>
    </PageContainer>
  )
}

export default Breadcrumb
