import styled from 'styled-components'

import { PAGE_MAX_WIDTH } from '@/constants/number'

const PageContainer = styled.div`
  width: min(96%, ${PAGE_MAX_WIDTH});
  margin-inline: auto;
  position: relative;
`
export default PageContainer
