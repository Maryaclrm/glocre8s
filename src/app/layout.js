import './globals.css';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '../../public/logo.jpg';

export const metadata = {
  title: 'Sign In         Track          Wish List',
}

function Logo ({x, y}){
  return(
    <div style={{left:x, top: y}} className={styles.logo}>
      <Image src={logo}/>
    </div>
  )

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={668} y={-2}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}