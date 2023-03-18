export const GA_UA_ID = process.env.NEXT_PUBLIC_GA_ID
export const GA_GA4_ID = process.env.NEXT_PUBLIC_GA_GA4_ID

export const pageview = (url: string) => {
  if (!GA_GA4_ID) return
  window.gtag('config', GA_GA4_ID, {
    page_path: url
  })
}