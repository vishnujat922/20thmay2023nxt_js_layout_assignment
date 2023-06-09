import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import Header from "@/components/header";
import RightAside from "@/components/rightaside";
import LeftAside from "@/components/leftaside";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> <Header />
        <main className='v_tbdr h-100'>
          <div className='row h-100'>
            <LeftAside />
              <div class="col-6 v_tbdr">
                {children}  
              </div>
            <RightAside />
          </div>
        </main>
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
      </body>
    </html>
  )
}