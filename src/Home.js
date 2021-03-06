import React from 'react'
import Ac7 from './imagens/ac7.jpg'
import Botao_Pagar from './imagens/botao_pagar.png'
import Logos1 from './imagens/logos1.png'
import Logos2 from './imagens/logos2.png'
import Playstore from './imagens/play_store.jpg'
import Appstore from './imagens/app_store.png'
import QRcode1 from './imagens/qrcode_appstore.png'
import QRcode2 from './imagens/qrcode_playstore.png'
import Botao_Recarga from './imagens/botao_recarga.png'
import { Link } from 'react-router-dom'
import Botao_Emprestimo from './imagens/botao_emprestimo.png'
import Botao_Emprestimo_Consignado from './imagens/botao_emprestimo_consignado.png'
import './Home.css'
function Home() {
  return (
    <div className="App-novo">
      <header>
        <img src={Logos1} className="App-QRCODE1" alt="qrcode1" />
      </header>
      <main>
        <img src={Ac7} className="App-Ac7" alt="Ac7" />
        <br></br>
        <Link to="/pagar">  <button className="App-botao-pagar"><img src={Botao_Pagar} className="App-Pagar" alt="Pagar" />
        </button>
        </Link>
        <Link to ="/recarga"><button className = "App-botao-recarga"><img src={Botao_Recarga} className="App-Recarga" alt="Recarga" /></button></Link>
        <br>
        </br>
        <br></br>
        <Link to = "/Emprestimo"><button className="App-botao-emprestimo">
            <img src={Botao_Emprestimo} className="App-Emprestimo" alt="Emprestimo" />
          </button>
        </Link>
        <Link to = "/EmprestimoConsignado"><button className="App-botao-emprestimo-consignado">
            <img src={Botao_Emprestimo_Consignado} className="App-Emprestimo-consignado" alt="Emprestimo-consignado" />
          </button>
        </Link>
        <br></br>
        <text className="App-label-text">Eröffnen Sie jetzt Ihr kostenloses digitales Konto,</text>
        <br></br>
        <text className= "App-label-text"> scannen Sie den QRcode und registrieren Sie sich.</text>
        <br>
        </br>
        <img src={Playstore} className="App-Playstore" alt="Playstore" />
        <img src={Appstore} className="App-Appstore" alt="Appstore" />
        <br>
        </br>
        <img src={QRcode2} className="App-QRCODE2" alt="qrcode2" />
        <img src={QRcode1} className="App-QRCODE1" alt="qrcode1" />
        <br>
        </br>
      </main>
      <asside>
        <img src={Logos2} className="App-QRCODE1" alt="qrcode1" />
      </asside>
      <footer>
        
      </footer>
    </div>
  );
}

export default Home;
