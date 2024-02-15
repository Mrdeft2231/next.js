import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import "./globals.css";



export const metadata = {
  title: "Pindie",
  description: "Портал инди-игр от студентов Яндекс Практикума",
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
