import { ClerkProvider } from "@clerk/nextjs"
import { zhCN } from "@clerk/localizations"
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={zhCN}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
