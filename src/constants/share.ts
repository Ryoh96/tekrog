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
  href: (url: string, title?: string) => string
}[] = [
  {
    name: 'twitter',
    hasIcon: true,
    icon: faTwitter,
    href: (url, title) => `https://twiter.com/share?url=${url}&text=${title}`,
  },
  {
    name: 'facebook',
    hasIcon: true,
    icon: faFacebookF,
    href: (url) => `http://www.facebook.com/share.php?u=${url}`,
  },
  {
    name: 'get-pocket',
    hasIcon: true,
    icon: faGetPocket,
    href: (url, title) =>
      `http://getpocket.com/edit?url=${url}&title=${title}`,
  },
  {
    name: 'line',
    hasIcon: true,
    icon: faLine,
    href: (url, title) => `http://line.me/R/msg/text/?${url}%0a${title}`,
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
  },
]
