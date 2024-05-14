import "./app.css"
import "../sass/main.sass";
import HomeLayer from "./components/HomeLayer";
import TitleBar from "./components/TitleBar";
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Portfolio - Jakob Prüfer',
  description: 'My portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body >
      <TitleBar />
      {children}
      <HomeLayer />
      </body>
    </html>
  )
}
