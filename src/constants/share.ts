import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faFacebookF,
  faGetPocket,
  faLine,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import type { ShareType } from '@/types/ShareType'

type Content = {
  text: string
  fontFamily: string
  fontWeight: number
}

type a = (typeof shareListToIcon)[0]['icon']

export const shareListToIcon: {
  name: ShareType
  hasIcon: boolean
  icon?: IconDefinition
  content?: Content
}[] = [
  { name: 'twitter', hasIcon: true, icon: faTwitter },
  { name: 'facebook', hasIcon: true, icon: faFacebookF },
  { name: 'get-pocket', hasIcon: true, icon: faGetPocket },
  { name: 'line', hasIcon: true, icon: faLine },
  {
    name: 'hatena',
    hasIcon: false,
    content: {
      text: 'B!',
      fontFamily: 'Verdana',
      fontWeight: 700,
    },
  },
]
