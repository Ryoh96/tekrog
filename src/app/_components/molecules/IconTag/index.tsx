import Image from 'next/image'
import * as stylex from '@stylexjs/stylex'
import Tag, { TagProps } from '../../atoms/Tag'

const IconTag = ({
  imageUrl,
  children,
  ...props
}: {
  imageUrl: string
  children?: React.ReactNode
} & TagProps) => {
  return (
    <Tag {...props}>
      <figure {...stylex.props(styles.figure)}>
        <Image
          src={imageUrl}
          alt=""
          width={20}
          height={20}
          style={{ objectFit: 'contain' }}
        />
      </figure>
      <span {...stylex.props(styles.span)}>{children}</span>
    </Tag>
  )
}

const styles = stylex.create({
  figure: {
    flex: '0 0 20px',
    height: 20,
    position: 'relative',
  },
  span: {
    wordBreak: 'keep-all',
  },
})

export default IconTag
