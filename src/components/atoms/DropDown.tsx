import styled from 'styled-components'

const archiveList = [
  '月を選択',
  '2023年3月',
  '2023年2月',
  '2023年1月',
  '2022年12月',
  '2022年11月',
]

const Select = styled.select`
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
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    background-position: calc(100% - 24px) 70%;
  }
`

const Option = styled.option`
  font-size: 14px;
`

const DropDown = () => {
  return (
    <Select>
      {archiveList.map((archive) => (
        <Option key={archive} value={archive}>
          {archive}
        </Option>
      ))}
    </Select>
  )
}

export default DropDown
