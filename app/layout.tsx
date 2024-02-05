import { zhCN } from "@clerk/localizations"
import { ClerkProvider } from "@clerk/nextjs"
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
