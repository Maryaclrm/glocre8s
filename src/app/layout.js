import './globals.css';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '../../public/logo.jpg';

export const metadata = {
  title: 'Glocre8s',
}

function Logo ({x, y}){
  return(
    <div style={{left:x, top: y}} className={styles.logo}>
      <Image src={logo}/>
    </div>
  );
}

function Menu1 ({x, y}){
  return(
    <p style={{left:x, top:y}} className={styles.menu1}>Sign In         Track          Wish List</p>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={668} y={-2}/>
          <Menu1 x={668} y={8}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}