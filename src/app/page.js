import Image from 'next/image'
import styles from './page.module.css'
import banner from '../../public/mulher1.png'
import passando from '../../public/passando.svg'
import seta from '../../public/direitaseta.svg'
import pagns from '../../public/pagns.svg'

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

function Banner({x, y}){
  return(
    <div style={{left:x, top:y }} className={styles.banner1}>
      <Image src={banner}/>
    </div>
  )
}

function TextosBanner({ x, y }) {
  return (
    <div>
      <h1 style={{ left: x, top: y }} className={styles.bannerTexto1}>
        LIMITED TIME OFFER
      </h1>
    </div>
  );
}

function DireitaSeta({x, y}){
  return(
    <div style={{left:x, top:y }} className={styles.passandoPag}>
    <Image src={seta}/>
    </div>
  )
}

function TextosBanner2({x, y}){
  return(
    <div>
    <h1 style={{ left: x, top: y }} className={styles.bannerTexto2}>
    20% OFF
    </h1>
    </div>
  )
}

function TextosBanner3({x, y}){
  return(
    <div>
    <h1 style={{ left: x, top: y }} className={styles.bannerTexto3}>
    All Earrings And Necklace
    </h1>
    </div>
  )
}

function BotaoBanner({x, y}){
  return(
    <div style={{ left: x, top: y }}>
   <button className={styles.botaoBanner}>SHOP NOW</button>
    </div>
  )
}

function Passando({x, y}){
  return(
  <div style={{left:x, top:y }} className={styles.passandoPag}>
      <Image src={passando}/>
    </div>
  )
}

function NomesRetan({x, y, texto}){
  return(
    <div style={{left:x, top:y}} className={styles.Nomeretan}>
          <p>{texto}</p>
    </div>
  )
}

function Paginas({x,y}){
  return(
    <div style={{left:x, top:y }} className={styles.pagina}>
    <Image src={pagns}/>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Anuncio x={240} y={412} />
      <Anuncioo x={240} y={488}/>

      <BotaoAnuncio x={240} y={603}/>

      <Banner x={0} y={782}/>
      <TextosBanner x={90} y={866}/>
      <TextosBanner2 x={90} y={910}/>
      <TextosBanner3 x={90} y={1060}/>
      <BotaoBanner x={90} y={1120}/>
      <Passando x={952} y={1840}/>
      <DireitaSeta x={1780} y={1200}/>

      <NomesRetan x={480} y={2130} texto="JEWELRIES"/>
      <NomesRetan x={925} y={2130} texto="HOME DECOR"/>
      <NomesRetan x={1350} y={2150}texto="DIGITAL PRINTS"/>
      <NomesRetan x={480} y={2467}texto="FABRICS"/>
      <NomesRetan x={925} y={2467}texto="HEAD WRAPS"/>
      <NomesRetan x={1382} y={2467}texto="SOAPS"/>

      <Paginas x={999} y={5050}/>

    </main>
  )
}
