import "../sass/main.sass";
import HomeLayer from "./components/HomeLayer";
import TitleBar from "./components/TitleBar";

export const metadata = {
  title: 'Portfolio - Jakob Prüfer',
  description: 'Design portfolio of product and web designer Jakob Prüfer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <TitleBar />
      {children}
      <HomeLayer />
      </body>
    </html>
  )
}
