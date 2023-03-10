import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

import PageContainer from './../layout/PageContainer'

const breadcrumbList = ['ホーム', 'カテゴリA', 'タイトル']

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

const Breadcrumb = () => {
  return (
    <PageContainer>
      <BreadcrumbWrapper>
        <FontAwesomeIcon icon={faHome} />
        {breadcrumbList.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb}>
            <p>{breadcrumb}</p>
            {index !== breadcrumbList.length - 1 && (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbWrapper>
    </PageContainer>
  )
}

export default Breadcrumb
