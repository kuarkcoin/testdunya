export const metadata = {
  title: 'TestDünya',
  description: 'Türkiye\'nin En Kapsamlı Test Platformu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* İŞTE TASARIMI DÜZELTECEK SİHİRLİ SATIR BURASI: */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
