import PageContainer from '@/app/_components/layouts/PageContainer'
import { makeBreadcrumb } from '@/app/_components/templates/Hero/Breadcrumb/makeBreadcrumb'
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import * as stylex from '@stylexjs/stylex'
import { SP } from '@/types/BreakPoints'

const Breadcrumb = ({
  pathname,
  title,
  searchParams,
}: {
  pathname: string
  title?: string
  searchParams?: string
}) => {
  const breadcrumbList = makeBreadcrumb(pathname, title, searchParams)
  return (
    <PageContainer>
      <nav aria-label="Breadcrumb" data-testid="breadcrumb">
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          {...stylex.props(styles.ol)}
        >
          {breadcrumbList.map((item, index) => (
            <li
              key={item.name}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <Link
                href={item.href}
                itemProp="item"
                itemScope
                itemType="https://schema.org/WebPage"
                itemID={item.href}
                aria-current={
                  index === breadcrumbList.length - 1 ? 'page' : undefined
                }
                {...stylex.props(styles.link)}
              >
                {index === 0 && (
                  <div>
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                )}
                <p itemProp="name" {...stylex.props(styles.p)}>
                  {item.name}
                </p>
                {index !== breadcrumbList.length - 1 && (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
              </Link>
              <meta itemProp="position" content={`${index + 1}`} />
            </li>
          ))}
        </ol>
      </nav>
    </PageContainer>
  )
}

const MQ_SP: SP = 768

const styles = stylex.create({
  ol: {
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '16px 24px',
    color: '#fff',
    position: 'relative',
    zIndex: 4,
    [`@media (max-width: ${MQ_SP}px)`]: {
      padding: '6px 20px',
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: 9,
    transition: 'all 0.3s',
    ':hover': {
      transform: 'scale(1.06)',
      textDecoration: 'underline',
    },
  },
  p: {
    marginTop: '0.2em',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'flex-end',
    [`@media (max-width: ${MQ_SP}px)`]: {
      maxWidth: 130,
    },
  },
})

export default Breadcrumb
