/* Funções não funcionais ex: textos, imagens...8*/

import Image from 'next/image'
import Logomarca from '../public/logo.jpg'

export const metadata = {
  title: 'Glocre8s',
}

function Logo({x, y, logomarca}){
  return(
   <div style={{left:x, top:y}} className={styles.LogoMarca}>
    <Image className={styles.logo} width={19} height={19} src="/logo.jpg" alt='dklnvshf'/>
    <p className= {styles.Logomarca}></p>
   </div>
  );
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        <header>
          <Logo x={135} y={53}/>
          <LogoMarca x={435} y={60}/>

        </header>
      </body>
    </html>
  )
}