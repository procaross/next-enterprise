import "styles/tailwind.css"
import "@/styles/globals.css"
import Navbar from "@/components/Navbar";
import { headers } from "next/headers";

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  // 授权页不显示NavBar
  const pathname = headers().get('next-url');
  const shouldShowNavbar = !pathname?.match(/\/sign-(in|up)$/);

  return (
    <html lang="zh-CN">
    <head />
    <body>
    {shouldShowNavbar && <Navbar />}
    {children}
    </body>
    </html>
  )
}

export default RootLayout