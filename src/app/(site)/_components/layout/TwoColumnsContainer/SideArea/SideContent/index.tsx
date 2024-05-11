import TitleBlock from '@/app/_components/molecules/TitleBlock'
import { pageColor } from '../../../../../../_styles/color.stylex'
import { SP } from '@/types/BreakPoints'
import * as stylex from '@stylexjs/stylex'

const SideContent = ({
  title,
  icon,
  children,
}: {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}) => {
  return (
    <div>
      <TitleBlock title={title} icon={icon} style={styles.titleBlock} />
      <div {...stylex.props(styles.container)}>{children}</div>
    </div>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  titleBlock: {
    borderRadius: '10px 10px 0 0',
    paddingBlockEnd: 14,
  },
  container: {
    padding: '20px 12px',
    backgroundColor: pageColor.white,
    borderRadius: '0 0 10px 10px',
  },
  [`@media (max-width: ${MQ_SP})`]: {
    padding: 12,
  },
})

export default SideContent
