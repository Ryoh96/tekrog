import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faFacebookF,
  faGetPocket,
  faLine,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

import type { ShareType } from '@/types/ShareType'

type Content = {
  text: string
  fontFamily: string
  fontWeight: number
}

export const shareListToIcon: {
  name: ShareType
  hasIcon: boolean
  icon?: IconDefinition
  content?: Content
  href: (url: string, title?: string) => string
  color: string
}[] = [
  {
    name: 'X',
    hasIcon: true,
    icon: faXTwitter,
    href: (url, title) => `https://twitter.com/share?url=${url}&text=${title}`,
    color: '#000',
  },
  {
    name: 'facebook',
    hasIcon: true,
    icon: faFacebookF,
    href: (url) => `http://www.facebook.com/share.php?u=${url}`,
    color: '#3b5998',
  },
  {
    name: 'get-pocket',
    hasIcon: true,
    icon: faGetPocket,
    href: (url, title) => `http://getpocket.com/edit?url=${url}&title=${title}`,
    color: '#ef4156',
  },
  {
    name: 'line',
    hasIcon: true,
    icon: faLine,
    href: (url, title) => `http://line.me/R/msg/text/?${url}%0a${title}`,
    color: '#05c756',
  },
  {
    name: 'hatena',
    hasIcon: false,
    content: {
      text: 'B!',
      fontFamily: 'Verdana',
      fontWeight: 700,
    },
    href: (url, title) =>
      `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`,
    color: '#029dd4',
  },
]
