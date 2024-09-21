
export const metadata = {
  title: 'Acevedo',
  description: 'Porfolio/Resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
