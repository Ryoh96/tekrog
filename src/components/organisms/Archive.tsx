import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DropDown from '../atoms/DropDown'
import SideContent from '../molecules/SideContent'

const Archive = () => {
  return (
    <SideContent
      title="アーカイブ"
      icon={<FontAwesomeIcon icon={faCalendar} />}
    >
      <DropDown />
    </SideContent>
  )
}

export default Archive
