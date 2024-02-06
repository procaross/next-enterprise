import "styles/tailwind.css"
import { dir } from "i18next"
import { languages } from "../i18n/settings"

type StaticParams = { lang: string }[]

export async function generateStaticParams(): Promise<StaticParams> {
  return languages.map((lang) => ({ lang }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { lang: string }
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, params: { lang } }) => {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
