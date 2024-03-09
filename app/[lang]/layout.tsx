import "styles/tailwind.css"
import Navbar from "@/components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="zh-CN">
      <head />
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
