import * as stylex from '@stylexjs/stylex'
import PageContainer from '../../layouts/PageContainer'
import { gradient } from '../../../_styles/gradient.stylex'
import Fnav from './Fnav'

const Footer = () => {
  return (
    <footer {...stylex.props(styles.footer)}>
      <PageContainer>
        <div>
          <Fnav />
          <p {...stylex.props(styles.copyright)}>
            copyright ©︎ 2021-{new Date().getFullYear()} TeKRog All Rights
            Reserved.
          </p>
        </div>
      </PageContainer>
    </footer>
  )
}

const styles = stylex.create({
  footer: {
    paddingBlock: '40px 30px',
    background: gradient.main,
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    justifySelf: 'flex-end',
  },
  copyright: {
    fontSize: 12,
  },
})

export default Footer
