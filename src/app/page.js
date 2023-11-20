/* Funções de botões*/
import Image from 'next/image';
import Logomarca from '../public/logo.jpg';  // Certifique-se de que o caminho para a imagem está correto

function Glocre({ x, y }) {
    return (
     <div className={StyleSheet.Glocre}/>
     <Image src={Logomarca}/>
    );
  }
  
  export default function Home(){
    return(
        <>
            <Glocre x={588} y={233} />
        </>
    )
  }