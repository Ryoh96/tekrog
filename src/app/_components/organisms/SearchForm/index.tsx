'use client'

import { useState } from 'react'
import IconButton from '../../atoms/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import * as stylex from '@stylexjs/stylex'
import { shadow } from '../../../_styles/shadow.stylex'

const SearchForm = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const searchQuery = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault()
    const q = encodeURI(query)
    router.push(`/search/result?s=${q}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    searchQuery(e)
  }

  return (
    <div {...stylex.props(styles.wrapper)}>
      <IconButton
        icon={<FontAwesomeIcon icon={faSearch} />}
        style={styles.icon}
        handleClick={searchQuery}
      />
      <input
        type="text"
        placeholder="検索ワード"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        {...stylex.props(styles.input)}
      />
    </div>
  )
}

const styles = stylex.create({
  icon: {
    borderRadius: '9px 0 0 9px',
    position: 'absolute',
  },
  wrapper: {
    position: 'relative',
    boxShadow: shadow.default,
    width: '100%',
  },
  input: {
    padding: '12px 8px 12px 56px',
    width: '100%',
    backgroundColor: '#fff',
    cursor: 'text',
    height: 48,
    boxSizing: 'border-box',
    color: '#333',
    fontFamily: 'YuGothic, Hiragino Kaku Gothic Pro, Meiryo, sans-serif',
    border: 'none',
    borderRadius: 10,
    '::placeholder': {
      color: '#333',
      fontFamily: 'YuGothic, Hiragino Kaku Gothic Pro, Meiryo, sans-serif',
    },
  },
})

export default SearchForm
