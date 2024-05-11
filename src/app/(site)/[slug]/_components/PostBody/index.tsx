import WordPressTextWrapper from '@/app/_components/layouts/WordPressTextWrapper'
import 'katex/dist/katex.min.css'

const PostBody = ({ children }: { children: string }) => {
  return <WordPressTextWrapper>{children}</WordPressTextWrapper>
}

export default PostBody
