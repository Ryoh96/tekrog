import { gradient } from '../../../_styles/gradient.stylex'
import { shadow } from '../../../_styles/shadow.stylex'
import { pageColor } from '../../../_styles/color.stylex'
import * as stylex from '@stylexjs/stylex'
import PageContainer from '../../layouts/PageContainer'
import Logo from './Logo'
import Gnav from './Gnav'

const Header = () => {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <PageContainer>
        <div {...stylex.props(styles.container)}>
          <Logo />
          <Gnav />
        </div>
      </PageContainer>
    </div>
  )
}

const styles = stylex.create({
  wrapper: {
    position: 'relative',
    background: gradient.main,
    color: pageColor.white,
    transition: '0.3s ease',
    zIndex: 200,
    boxShadow: shadow.default,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
  },
})

export default Header
