import { StyleXStyles } from '@stylexjs/stylex'
import { ComponentPropsWithoutRef } from 'react'
import * as stylex from '@stylexjs/stylex'
import { gradient } from '../../../_styles/gradient.stylex'
import { shadow } from '../../../_styles/shadow.stylex'

type Props = ComponentPropsWithoutRef<'button'> & {
  styleXStyle?: StyleXStyles
  children: string
}

const Button = ({ styleXStyle, ...props }: Props) => {
  return <button {...stylex.props(styles.button, styleXStyle)} {...props} />
}

const styles = stylex.create({
  button: {
    color: '#fff',
    background: gradient.main,
    padding: '10px 20px',
    borderRadius: 20,
    boxShadow: shadow.near,
    border: 'none',
    transition: 'all 0.3s',
    cursor: 'pointer',
    ':hover': {
      boxShadow: shadow.far,
      transform: 'scale(1.1)',
    },
    ':disabled': {
      background: '#ccc',
      ':hover': {
        boxShadow: shadow.near,
        transform: 'scale(1)',
      },
    },
  },
})

export default Button
