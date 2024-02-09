import "styles/tailwind.css"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="zh-CN">
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
