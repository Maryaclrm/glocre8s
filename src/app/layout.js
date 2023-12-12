import './globals.css';
import styles from './styles.module.css';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import user from '../../public/user.svg';
import coracao from '../../public/coracao.svg';
import caminhao from '../../public/caminhao.svg';
import carrinho from '../../public/carrinho.svg';
import diamante from '../../public/diamante.svg'
import sofa from '../../public/sofa.svg';
import papel from '../../public/papel.svg';
import camisa from '../../public/camisa.svg';
import sabao from '../../public/sabao.svg';
import chapeu from '../../public/chapeu.svg';

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
        <Image className={styles.dentroQuadrados} src={diamante} />
      </div>
  )
}

function Quadrados2({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
        <Image className={styles.dentroQuadrados} src={sofa} />
      </div>
      
  )
}

function Quadrados3({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
        <Image className={styles.dentroQuadrados} src={papel} />
      </div>
  )
}
function Quadrados4({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
        <Image className={styles.dentroQuadrados2} src={camisa} />
      </div>
  )
}

function Quadrados5({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
        <Image className={styles.dentroQuadrados2} src={chapeu} />
      </div>
  )
}

function Quadrados6({x, y}){
  return(
      <div style={{left:x, top:y }} className={styles.quadrados}>
        <Image className={styles.dentroQuadrados2} src={sabao}/>
      </div>
  )
}

function Retangulo1({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo1}>
      </div>
  )
}

function Retangulo2({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo2}>
      </div>
  )
}

function Retangulo3({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo3}>
      </div>
  )
}


function Retangulo4({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo4}>
      </div>
  )
}

function Retangulo5({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo5}>
      </div>
  )
}

function Retangulo6({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo6}>
      </div>
  )
}

function Retangulo7({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo7}>
      </div>
  )
}

function Retangulo8({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo8}>
      </div>
  )
}

function Retangulo9({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo9}>
      </div>
  )
}

function Retangulo10({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo10}>
      </div>
  )
}

function Retangulo11({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo11}>
      </div>
  )
}

function Retangulo12({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo12}>
      </div>
  )
}

function Retangulo13({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo13}>
      </div>
  )
}

function Retangulo14({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo13}>
      </div>
  )
}

function Retangulo15({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo15}>
      </div>
  )
}

function Retangulo16({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo15}>
      </div>
  )
}

function Retangulo17({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo17}>
      </div>
  )
}

function Retangulo18({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo17}>
      </div>
  )
}

function Retangulo19({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo19}>
      </div>
  )
}

function Retangulo20({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo19}>
      </div>
  )
}

function Retangulo21({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo20}>
      </div>
  )
}

function Retangulo22({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo20}>
      </div>
  )
}

function Retangulo23({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo21}>
      </div>
  )
}

function Retangulo24({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.retangulo21}>
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
          <Menu2 x={1400} y={49} />
          <Menu3 x={540} y={1900}/>
          <div className='Squares'>
                      <div> 
                      <Quadrados1 x={369} y={2084} />
                      </div>
          <Quadrados2 x={819} y={2084}/>
          <Quadrados3 x={1261} y={2084}/>
          <Quadrados4 x={369} y={2402}/>
          <Quadrados5 x={819} y={2402}/>
          <Quadrados6 x={1261} y={2402}/>
          </div>
          <Retangulo1 x={44} y={1961}/>
          <Retangulo2 x={24} y={1961}/>
          <Retangulo3 x={0} y={1961}/>
          <Retangulo4 x={0} y={2728}/>
          <Retangulo5 x={0} y={2750}/>
          <Retangulo6 x={0} y={2772}/>
          <Retangulo7 x={1700} y={1961}/>
          <Retangulo8 x={1802} y={1983}/>
          <Retangulo9 x={1903} y={2005}/>
          <Retangulo10 x={1968} y={2480}/>
          <Retangulo11 x={1946} y={2582}/>
          <Retangulo12 x={1924} y={2683}/>
          <Retangulo13 x={473} y={2139}/>
          <Retangulo14 x={473} y={2205}/>
          <Retangulo15 x={486} y={2454}/>
          <Retangulo18 x={486} y={2511}/>
          <Retangulo16 x={925} y={2143}/>
          <Retangulo17 x={925} y={2207}/>
          <Retangulo18 x={925} y={2207}/>
          <Retangulo19 x={920} y={2454}/>
          <Retangulo20 x={920} y={2511}/>
          <Retangulo21 x={1360} y={2143}/>
          <Retangulo22 x={1360} y={2207}/>
          <Retangulo23 x={1386} y={2454}/>
          <Retangulo24 x={1386} y={2511}/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}