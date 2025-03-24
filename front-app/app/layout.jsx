import SideBar from "@components/Sidebar"

export const metadata = {
  title: 'GoTech Consulting Administrator',
  description: 'Organize seu sonhos com tecnologia',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body>
        <SideBar/>
        { children }
      </body>
    </html>
  )
}
