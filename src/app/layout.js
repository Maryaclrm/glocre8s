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
import facebook from '../../public/facebook.svg';
import insta from '../../public/insta.svg';
import twitter from '../../public/twitter.svg';
import youtube from '../../public/youtube.svg';
import apple from '../../public/apple.svg';
import android from '../../public/android.svg';
import local from '../../public/localizacao.svg';
import master from '../../public/master.svg';
import visa from '../../public/visa.svg';
import paypal from '../../public/paypal.svg';

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
      <Image src={fotos}/><p>{data}</p>
      <Image src={estrelas}/><p>{nota}</p>
      <p>{comentario}</p>
      <Image src={produto}/><p>{nome}</p>
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

function TextosMaiores({x, y, texto}){
  return(
    <div style={{ left: x, top: y }} className={styles.maiores}> 
    <p>{texto}</p></div>
  )
}

function TextosMenores({x, y, texto}){
  return(
    <div style={{ left: x, top: y }} className={styles.menores}> 
    <p>{texto}</p></div>
  )
}

function Redes({x, y, rede}){
  return(
    <div style={{left: x, top:y}} className={styles.redeSociais}>
      <Image src={rede}/>
    </div>
  )
}

function App ({x, y, tipo}){
  return(
    <div style={{left:x, top:y}} className={styles.apps}>
      <Image src={tipo}/>
    </div>
  )
}

function Ultimo({x, y, texto}){
  return(
    <div style={{ left: x, top: y }} className={styles.ultimo}> 
    <p>{texto}</p></div>
  )
}

function Pagamento({x, y, pague}){
  return(
    <div style={{ left: x, top: y }} className={styles.Pague}> 
    <Image src={pague}/></div>
  )
}

function LinhaQuad({x, y}){
  return(
    <div style={{left:x, top:y }} className={styles.linhaQuad}>
    </div>
  )
}

//TOP É Y , LEFT É X
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={668} y={-2} />
          <Menu1 x={3} y={45} />
          <Menu2 x={1350} y={49} />
          

          <Quadrados1 x={369} y={2084}/>
          <Quadrados2 x={819} y={2084}/>
          <Quadrados3 x={1261} y={2084}/>
          <Quadrados4 x={369} y={2402}/>
          <Quadrados5 x={819} y={2402}/>
          <Quadrados6 x={1261} y={2402}/>

          <LinhaQuad x={473} y={2139}/>


          <Retangulo1 x={44} y={1961} cor="#FF4500D6" altura={101}/>
          <Retangulo1 x={44} y={2760} cor="#FF4500D6" altura={101}/>
          <Retangulo1 x={1800} y={2760} cor="#FF4500D6" altura={101}/>
          <Retangulo1 x={1800} y={1961} cor="#FF4500D6" altura={101}/>

          <Retangulo2 x={22} y={1961} cor="#FF4500D6" altura={202}/>
          <Retangulo2 x={22} y={2660} cor="#FF4500D6" altura={202}/>
          <Retangulo2 x={1820} y={2660} cor="#FF4500D6" altura={202}/>
          <Retangulo2 x={1820} y={1961} cor="#FF4500D6" altura={202}/>

          <Retangulo3 x={0} y={1961} cor="#FF4500D6" altura={304}/>
          <Retangulo3 x={0} y={2560} cor="#FF4500D6" altura={304}/>
          <Retangulo3 x={1840} y={2560} cor="#FF4500D6" altura={304}/>
          <Retangulo3 x={1840} y={1961} cor="#FF4500D6" altura={304}/>

          <Linha x={0} y={2873}/>
          <Linha x={0} y={4100}/>
          <TEXTOS  x={600} y={1961} nome="SHOP  BY  CATEGORY"/>
          <TEXTOS  x={600} y={2919} nome="FEATURED ITEMS"/>
          <TEXTOS  x={550} y={4109} nome="REVIEWS"/>

            <Produto x={101} y={3077} imagem={bandana}nome="Red And Black Head Wraps| 100% cotton" preco="$10.5" />

            <Produto x={564} y={3077} imagem={almofada}nome="African Print Cushion Cover " preco="$28.5" />

            <Produto x={1020} y={3077} imagem={colar}nome="Summer Earrings For Women And Kids" preco="$3.2" />

            <Produto x={1469} y={3077} imagem={couro}nome="Goat Milk Turmeric Glow Soap" preco="$5.3" />

            <Produto x={101} y={3576} imagem={agenda}nome="Wedding Anniversary Printable Gift" preco="$7.2" />

            <Produto x={564} y={3576} imagem={parede}nome="White And Black African Wax Fabric| 100% cotton" preco="$9.2" />

            <Produto x={1020} y={3576} imagem={pano}nome="Shades Of Red Fat Quarters Bundle Fabrics" preco="$5.8" />

            <Produto x={1469} y={3576} imagem={mesa}nome="African Print Table Runner With 4 Napkins" preco="$5.3" />

          <Review x={0} y={4250} fotos={pessoa3} data="Jane on 15 April,2021 " estrelas={estrelas1} nota="5.0/5.0" comentario="Thank you so much for delivering a quality piece.
          Will be using it with one of my outfits.Just not sure which one!!!!" produto={parede} nome="White And Black African
            Wax Fabric"/>

            <Review x={830} y={4250} fotos={pessoa2} data="Femi on 3 April,2021" estrelas={estrelas2} nota="4.5/5.0" comentario="This is awesome. My wife fell in love with it at first sight." produto={agenda} nome="Wedding Anniversay Printable Gift"/>

            <Review x={1433} y={4250} fotos={pessoa1} data="Ife on 25 March,2021" estrelas={estrelas1} nota="5.0/5.0" comentario="I love this soap. Great on my sensitive skin." produto={couro} nome="White And Black African
            Wax Fabric"/>

          <Fundo x={0} y={5120}>
          <Retangulo1 x={22} y={0} cor="white" altura={202}/>
          <Retangulo1 x={22} y={680} cor="white" altura={202}/>
          <Retangulo1 x={1940} y={680} cor="white" altura={202}/>
          <Retangulo1 x={1940} y={0} cor="white" altura={202}/>

          <Retangulo2 x={44} y={0} cor="white" altura={101}/>
          <Retangulo2 x={44} y={785} cor="white" altura={101}/>
          <Retangulo2 x={1900} y={785} cor="white" altura={101}/>
          <Retangulo2 x={1910} y={0} cor="white" altura={101}/>

          <Retangulo3 x={0} y={0} cor="white" altura={304}/>
          <Retangulo3 x={0} y={580} cor="white" altura={304}/>
          <Retangulo3 x={1970} y={580} cor="white" altura={304}/>
          <Retangulo3 x={1970} y={0} cor="white" altura={304}/>

          <TextosMaiores x={118} y={69} texto="HELP & SUPPORT"/>
          <TextosMaiores x={452} y={69} texto="COMPANY INFO"/>
          <TextosMaiores x={759} y={69} texto="CUSTOMER CARE"/>
          <TextosMaiores x={1195} y={69} texto="FIND US ON"/>
          <TextosMaiores x={1572} y={69} texto="APP"/>
          <TextosMaiores x={1195} y={559} texto="WE ACCEPT"/>

          <TextosMenores x={118} y={125} texto="Shipping Info"/>
          <TextosMenores x={118} y={165} texto="Returns"/>
          <TextosMenores x={118} y={185} texto="How To Order"/>
          <TextosMenores x={118} y={215} texto="How To Track"/>
          <TextosMenores x={118} y={245} texto="Size Guide"/>

          <TextosMenores x={452} y={125} texto="About GloCre8s"/>
          <TextosMenores x={452} y={155} texto="Affiliate"/>
          <TextosMenores x={452} y={185} texto="Fashion Vlog"/>

          <TextosMenores x={759} y={129} texto="Contact US"/>
          <TextosMenores x={759} y={155} texto="Payment Method"/>
          <TextosMenores x={759} y={185} texto="Offer Redemption"/>

          <Redes x={1192} y={132} rede={facebook}/>
          <Redes x={1262} y={132} rede={twitter}/>
          <Redes x={1332} y={132} rede={insta}/>
          <Redes x={1402} y={132} rede={youtube}/>
          <Redes x={639} y={665} rede={local}/>

          <App x={1572} y={132} tipo={apple}/>
          <App x={1642} y={132} tipo={android}/>

          <Ultimo x={118} y={555} texto="©2021 GloCre8s All Rights Reserved"/>
          <Ultimo x={118} y={599} texto=" Privacy Center  |"/> 
          <Ultimo x={339} y={599} texto="Privacy & Cookie Policy  |"/>
          <Ultimo x={679} y={599} texto="Manage Cookies  |"/>
          <Ultimo x={123} y={639} texto="Terms & Conditions |"/>
          <Ultimo x={398} y={639} texto="Copyright Notice |"/>
          <Ultimo x={667} y={639} texto="England |"/>

          <Pagamento x={1200} y={630} pague={paypal}/>
          <Pagamento x={1265} y={630} pague={master}/>
          <Pagamento x={1330} y={630} pague={visa}/>
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