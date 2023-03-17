import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import PageContainer from './../layout/PageContainer'

const BreadcrumbList = styled.ol`
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
      <nav aria-label="Breadcrumb">
        <BreadcrumbList
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {list.map((item, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <StyledLink
                href={item.href}
                itemProp="item"
                itemScope
                itemType='https://schema.org/WebPage'
                itemID={item.href}
                aria-current={index === list.length-1 ? "page" : undefined}
              >
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
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          ))}
        </BreadcrumbList>
      </nav>
    </PageContainer>
  )
}

export default Breadcrumb
