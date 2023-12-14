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
import agenda from '../../public/agenda.png';
import almofada from '../../public/almofada.png';
import bandana from '../../public/bandana.png';
import colar from '../../public/colar.png';
import couro from '../../public/couro.png';
import mesa from '../../public/mesa.png';
import pano from '../../public/pano.png';
import parede from '../../public/parede.png';
import pessoa1 from '../../public/pessoa1.png';
import pessoa2 from '../../public/pessoa2.png';
import pessoa3 from '../../public/pessoa3.png';
import estrelas1 from '../../public/estrelas1.svg';
import estrelas2 from '../../public/estrelas2.svg';

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

function Retangulo1({x, y, cor, altura}){
  return(
     <div style={{left:x, top:y, background:cor, height: altura}} className={styles.retangulo1}>
      </div>
      //menor da frente
  )
}

function Retangulo2({x, y, cor, altura}){
  return(
     <div style={{left:x, top:y , background:cor, height: altura}} className={styles.retangulo1}>
      </div>
      //do meio
  )
}

function Retangulo3({x, y, cor, altura}){
  return(
     <div style={{left:x, top:y,  background:cor, height: altura}} className={styles.retangulo1}>
      </div>
      //maior
  )
}

function Linha({x, y}){
  return(
     <div style={{left:x, top:y }} className={styles.linha}>
      </div>
  )
}

function TEXTOS({x, y, nome}){
  return(
    <div style={{ left: x, top: y }} className={styles.textosPrin}>
    <p>{nome}</p>
    </div>
  )
}

function Produto({x, y, imagem, nome, preco}){
  return(
      <div style={{left:x, top:y }} className={styles.produto}>
        <Image src={imagem}/>
        <p>{nome}</p>
        <p>{preco}</p>
        <button className={styles.botaoBanner}>ADD TO CART</button>
      </div>
  )
}

function Review({x, y, fotos, data, estrelas, nota, comentario, produto, nome}){
  return(
    <div style={{left: x, top:y}} className={styles.review}>
      <Image src={fotos}/>
      <p>{data}</p>
      <Image src={estrelas}/>
      <p>{nota}</p>
      <p>{comentario}</p>
      <Image src={produto}/>
      <p>{nome}</p>
    </div>
  )
}

function Fundo ({x,y, children}){
  return(
    <div style={{left:x, top:y }} className={styles.fundo}>
      {children}
      </div>
  )
}


function Retang({x, y}){
  return(
    <div style={{left:x, top:y }} className={styles.retan}>
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

          <Quadrados1 x={369} y={2084}/>
          <Quadrados2 x={819} y={2084}/>
          <Quadrados3 x={1261} y={2084}/>
          <Quadrados4 x={369} y={2402}/>
          <Quadrados5 x={819} y={2402}/>
          <Quadrados6 x={1261} y={2402}/>

          <Retangulo1 x={44} y={1961} cor="red" altura={101}/>
          <Retangulo1 x={0} y={2728} cor="white" altura={101}/>

          <Retangulo2 x={24} y={1961} cor="red" altura={202}/>

          <Retangulo3 x={0} y={1961} cor="red" altura={304}/>

          <Retang x={10} y={5200}/>

          <Linha x={0} y={2873}/>
          <Linha x={0} y={4100}/>
          <TEXTOS  x={724} y={1961} nome="SHOP  BY  CATEGORY"/>
          <TEXTOS  x={724} y={2919} nome="FEATURED ITEMS"/>
          <TEXTOS  x={724} y={4109} nome="REVIEWS"/>

            <Produto x={101} y={3077} imagem={bandana}nome="Red And Black Head Wraps| 100% cotton" preco="$10.5" />

            <Produto x={564} y={3077} imagem={almofada}nome="African Print Cushion Cover " preco="$28.5" />

            <Produto x={1020} y={3077} imagem={colar}nome="Summer Earrings For Women And Kids" preco="$3.2" />

            <Produto x={1469} y={3077} imagem={couro}nome="Goat Milk Turmeric Glow Soap" preco="$5.3" />

            <Produto x={101} y={3576} imagem={agenda}nome="Wedding Anniversary Printable Gift" preco="$7.2" />

            <Produto x={564} y={3576} imagem={parede}nome="White And Black African Wax Fabric| 100% cotton" preco="$9.2" />

            <Produto x={1020} y={3576} imagem={pano}nome="Shades Of Red Fat Quarters Bundle Fabrics" preco="$5.8" />

            <Produto x={1469} y={3576} imagem={mesa}nome="African Print Table Runner With 4 Napkins" preco="$5.3" />

          <Review x={0} y={4322} fotos={pessoa3} data="Jane on 15 April,2021 " estrelas={estrelas1} nota="5.0/5.0" comentario="Thank you so much for delivering a quality piece.
          Will be using it with one of my outfits.Just not sure which one!!!!" produto={parede} nome="White And Black African
            Wax Fabric"/>

            <Review x={830} y={4322} fotos={pessoa2} data="Femi on 3 April,2021" estrelas={estrelas2} nota="4.5/5.0" comentario="This is awesome. My wife fell in love with it at first sight." produto={agenda} nome="Wedding Anniversay Printable Gift"/>

            <Review x={1433} y={4322} fotos={pessoa1} data="Ife on 25 March,2021" estrelas={estrelas1} nota="5.0/5.0" comentario="I love this soap. Great on my sensitive skin." produto={couro} nome="White And Black African
            Wax Fabric"/>

          <Fundo x={0} y={5200}>
          <Retangulo1 x={44} y={0} cor="white"/>
          </Fundo>


        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

//TOP É Y , LEFT É X