import './globals.css';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '../../public/logo.jpg';
import user from '../../public/user.svg';
import coracao from '../../public/coracao.svg';
import caminhao from '../../public/caminhao.svg';

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
    <p style={{left:x, top:y}} className={styles.menu1Container}>
       <p className={styles.menuItem}>Sign In</p>
      <p className={styles.menuItem}>Track</p>
      <p className={styles.menuItem}>Wish List</p>
    </p>
  );
}

function FotoMenu1({ x, y }) {
  return (
    <div style={{ left: x, top: y }} className={styles.fotoMenu1}>
      <Image src={user} />
    </div>
  );
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={668} y={-2}/>
          <Menu1 x={3} y={0}/>
          <FotoMenu1 x={36} y={30}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}