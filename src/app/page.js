// import Image from 'next/image'
import styles from './page.module.css'

function Anuncio({ x, y }) {
  return (
    <h2 style={{ left: x, top: y }} className={styles.anunciar}>
      Creativity Is Life!
    </h2>
  )
}

function Anuncioo({x, y}){
  return(
    <h3 style={{left: x, top: y}} className={styles.anuncioo}>We just love being creative.Being able to see
    our ideas come alive and becoming useful.
    That brings fulfilment!</h3>
  )
}
function BotaoAnuncio({x, y}){
  return(
    <div style={{ left: x, top: y }}>
   <button className={styles.botaoAnuncio}>ABOUT US</button>
    </div>
  )
}


export default function Home() {
  return (
    <main>
      <Anuncio x={240} y={412} />
      <Anuncioo x={240} y={488}/>
      <BotaoAnuncio x={240} y={603}/>
    </main>
  )
}
