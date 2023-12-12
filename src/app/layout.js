import './globals.css';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '../../public/logo.jpg';
import user from '../../public/user.svg';
import coracao from '../../public/coracao.svg';
import caminhao from '../../public/caminhao.svg';
import carrinho from '../../public/carrinho.svg';

export const metadata = {
  title: 'Glocre8s',
}

function Logo({ x, y }) {
  return (
    <div style={{ left: x, top: y }} className={styles.logo}>
      <Image src={logo} />
    </div>
  );
}

function Menu1({ x, y }) {
  return (
    <div style={{ left: x, top: y }} className={styles.menu1Container}>
      <p className={styles.menuItem}>Sign In</p>
      <Image src={user} />
      <p className={styles.menuItem}>Track</p>
      <Image src={caminhao} />
      <p className={styles.menuItem}>Wish List</p>
      <Image src={coracao} />
    </div>
  );
}

function Menu2({ x, y }) {
  return (
    <div style={{ left: x, top: y }} className={styles.menu2Container}>
      <input type="text" className={styles.menu2Container} placeholder='Search All Itens' />
      <button className={styles.botaoMenu2} >SEARCH</button>
      <Image className={styles.ftMenu2} src={carrinho} />
    </div>
  );
}

function Menu3({x, y}){
  return(
    <div style={{ left: x, top: y }} className={styles.menu3container}>
    <p className={styles.menuItem}>SHOP  BY  CATEGORY</p>
    </div>
  )
}

function Quadrados1({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
      </div>
      
  )
}

function Quadrados2({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
      </div>
      
  )
}

function Quadrados3({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
      </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={668} y={-2} />
          <Menu1 x={3} y={45} />
          <Menu2 x={1474} y={49} />
          <Menu3 x={540} y={1900}/>
          <Quadrados1 x={369} y={2084}/>
          <Quadrados2 x={380} y={2084}/>
          <Quadrados3 x={420} y={2084}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}