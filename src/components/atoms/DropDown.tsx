'use client'

import { useRouter } from 'next/navigation'
import type { ChangeEvent } from 'react'
import { useCallback } from 'react'
import styled from 'styled-components'

const Select = styled.select.attrs({
  'data-testid': 'select-archives',
})`
  width: 100%;
  border: 1px solid #000;
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: inherit;
  background-color: #fff;
  background-image: url(/chevron-bottom.svg);
  background-repeat: no-repeat;
  background-position: calc(100% - 24px) 52%;
  background-size: 22px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
    z-index: 2;
    box-shadow: ${({ theme }) => theme.boxShadow.far};
    background-position: calc(100% - 24px) 70%;
  }
`

const Option = styled.option`
  font-size: 14px;
`

type DropDownProps = {
  value: string[]
  links: string[]
}

const DropDown = ({ value, links }: DropDownProps) => {
  const router = useRouter()

  const selectValue = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      router.push(links[Number(e.target.value)])
    },
    [links, router]
  )

  return (
    <Select onChange={(e) => selectValue(e)}>
      {value.map((v, index) => (
        <Option key={v} value={index}>
          {v}
        </Option>
      ))}
    </Select>
  )
}

export default DropDown
