// import Image from 'next/image'
import styles from './page.module.css'

function Anuncio ({x, y}){
  return(
    <h2 style={{left:x, top:y}} className={styles.anunciar}>
      Creativity Is Life!
    </h2>
  )
}

export default function Home() {
  return (
    <main>
      <Anuncio x={237} y={275}/>
    </main>
  )
}
