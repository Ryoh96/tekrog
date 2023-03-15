import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'

import IconButton from '@/components/atoms/IconButton'

const SearchFormWarpper = styled.div`
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 100%;
`

const Input = styled.input.attrs({
  type: 'text',
})`
  padding: 12px 8px 12px 56px;
  width: 100%;
  background-color: #fff;
  cursor: text;
  height: 48px;
  box-sizing: border-box;
  color: #333;
  font-family: YuGothic, Hiragino Kaku Gothic Pro, Meiryo, sans-serif;
  border: none;
  border-radius: 10px;

  &::placeholder {
    color: #333;
    font-family: YuGothic, Hiragino Kaku Gothic Pro, Meiryo, sans-serif;
  }
`

const SearchIconButton = styled(IconButton)`
  position: absolute;
`

const SearchForm = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    searchQuery(e)
  }
  const searchQuery = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    const q = encodeURI(query)
    router.push(`/search/result?s=${q}`)
  }

  return (
    <SearchFormWarpper>
      <SearchIconButton icon={<FontAwesomeIcon icon={faSearch} />} />
      <Input
        placeholder="検索ワード"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </SearchFormWarpper>
  )
}

export default SearchForm
