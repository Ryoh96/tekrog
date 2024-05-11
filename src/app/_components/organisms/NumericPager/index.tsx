import * as stylex from '@stylexjs/stylex'
import Link from 'next/link'
import NumericPagerItem from './NumericPagerItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

const NumericPager = ({
  totalPages,
  current,
  type,
}: {
  totalPages: number
  current: number
  type: string
}) => {
  if (totalPages === 1) return null

  const renderPagerItems = () => {
    const pagerItems = []

    // 前のページへのリンク
    if (current > 1) {
      pagerItems.push(
        <Link
          href={current === 2 ? type : `${type}page/${current - 1}`}
          key="prev"
        >
          <NumericPagerItem>
            <FontAwesomeIcon icon={faBackward} />
          </NumericPagerItem>
        </Link>,
      )
    }

    // ページ番号の表示
    for (let page = 1; page <= totalPages; page++) {
      if (
        page === 1 ||
        page === totalPages ||
        page === current ||
        (page >= current - 1 && page <= current + 1)
      ) {
        pagerItems.push(
          <Link href={page === 1 ? type : `${type}page/${page}`} key={page}>
            <NumericPagerItem isCurrent={current === page}>
              {page}
            </NumericPagerItem>
          </Link>,
        )
      } else if (
        (page === current - 2 && current > 3) ||
        (page === current + 2 && current < totalPages - 2)
      ) {
        // 「...」の表示
        pagerItems.push(
          <span key={`ellipsis${page}`} {...stylex.props(styles.dots)}>
            ...
          </span>,
        )
      }
    }

    // 次のページへのリンク
    if (current < totalPages) {
      pagerItems.push(
        <Link href={`${type}page/${current + 1}`} key="next">
          <NumericPagerItem>
            <FontAwesomeIcon icon={faForward} />
          </NumericPagerItem>
        </Link>,
      )
    }

    return pagerItems
  }

  return <div {...stylex.props(styles.div)}>{renderPagerItems()}</div>
}

const styles = stylex.create({
  div: {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    marginBottom: '0.5em',
  },
})

export default NumericPager
