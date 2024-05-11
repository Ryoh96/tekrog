import { format, parseISO } from 'date-fns'
import { ja } from 'date-fns/locale/ja'

const formatDate = (date: string) =>
  format(parseISO(date), 'yyyy年MM月dd日', {
    locale: ja,
  })

export default formatDate
