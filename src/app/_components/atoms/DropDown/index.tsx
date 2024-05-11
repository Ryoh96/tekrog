'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../../_styles/shadow.stylex'

const DropDown = ({ values, links }: { values: string[]; links: string[] }) => {
  const router = useRouter()

  const selectValue = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      router.push(links[Number(e.target.value)])
    },
    [links, router],
  )

  return (
    <select onChange={(e) => selectValue(e)} {...stylex.props(styles.select)}>
      {values.map((value, index) => (
        <option key={value} value={index} {...stylex.props(styles.option)}>
          {value}
        </option>
      ))}
    </select>
  )
}

const styles = stylex.create({
  select: {
    width: '100%',
    border: '1px solid #000',
    padding: 10,
    appearance: 'none',
    fontFamily: 'inherit',
    backgroundColor: '#fff',
    backgroundImage: "url('/chevron-bottom.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(100% - 24px) 52%',
    backgroundSize: 22,
    cursor: 'pointer',
    fontSize: 16,
    transition: 'transform 0.3s',
    zIndex: 1,
    position: 'relative',
    transform: 'scale(1)',
    ':hover': {
      transform: 'scale(1.05)',
      zIndex: 2,
      boxShadow: shadow.far,
      backgroundPosition: 'calc(100% - 24px) 70%',
    },
    ':focus': {
      transform: 'scale(1.05)',
      zIndex: 2,
      boxShadow: shadow.far,
      backgroundPosition: 'calc(100% - 24px) 70%',
    },
  },
  option: {
    fontSize: 14,
  },
})

export default DropDown
