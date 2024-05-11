import formatDate from '@/app/_utils/formatDate'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as stylex from '@stylexjs/stylex'

const DateTime = ({ children }: { children: string }) => {
  return (
    <span {...stylex.props(styles.wrapper)}>
      <FontAwesomeIcon icon={faClock} />
      <time dateTime={children}>{formatDate(children)}</time>
    </span>
  )
}

const styles = stylex.create({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '11px 1fr',
    gap: 10,
    fontSize: 14,
    color: '#fff',
    alignItems: 'center',
    width: 'fit-content',
  },
})

export default DateTime
