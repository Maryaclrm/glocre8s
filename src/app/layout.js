/* Funções não funcionais ex: textos, imagens...8*/


export const metadata = {
  title: 'Glocre8s',
};

function cimaEsquerdo({}){
  return (
    <p style={{left: x, top: y}} className={styles.entrar}>Sing In<span className={styles.levar}>Track</span>Wish List</p>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo x={588} y={233} />
          <cimaEsquerdo x={3} y={45}/>
          {/* Corrigindo para usar a importação correta: */}
        </header>
      </body>
    </html>
  );
}
