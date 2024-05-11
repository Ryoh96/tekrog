import { meta } from '@/app/_libs/meta'
import ContactForm from './_components/ContactForm'

export function generateMetadata() {
  return meta({
    title: 'お問い合わせ',
    description: 'お問い合わせのページです。',
    url: '/contact',
  })
}

const Page = () => {
  return <ContactForm />
}

export default Page
