import React, { Component } from 'react';
import Ac7 from './imagens/ac7.jpg'
import Voltar from './imagens/voltar.png'
import { Link } from 'react-router-dom'
import Analise from './imagens/analise.png'
import JurosBaixos from './imagens/jurosbaixos.png'
import Digital from './imagens/digital.png'
import Receba from './imagens/receba.png'
import './Emprestimo.css'
import QRcode from './imagens/qrcode.png'
class Emprestimo extends Component{
    render(){
        return(
            <div className = "App">
                <header >
                    <Link to  = "/">
                        <button className = "App-botao-voltar">
                            <img src={Voltar} className="App-voltar" alt="voltar" />
                        </button>
                    </Link>
                </header>
                <main>
                    <img src={Ac7} className="App-Ac7" alt="Ac7" />
                </main>
                <aside className = "Teste">
                </aside>
                <div className = "div_qrcode">
                    <div className = "div_imagens">
                        <img src={Receba} className="App-Receba" alt="Receba" />
                        <img src={JurosBaixos} className="App-JurosBaixos" alt="JurosBaixos" />
                        <br>
                        </br>
                        <img src={Analise} className="App-Analise" alt="Analise" />
                        <img src={Digital} className="App-Digital" alt="Digital" />
                    </div>
                    <div className = "div_info">
                        <br></br>
                        <text className= "App-emp-text1">DARLEHEN VON JURISTISCHEN PERSONEN</text>
                        <br></br>
                        <p className= "App-text3">Jet-Kredit für kleine und mittelständische Unternehmen, um die Dynamik ihres Geschäfts wieder aufzunehmen und schnell, unbürokratisch und einfach Betriebskapital bereitzustellen.</p>
                        <br></br>
                        <text className= "App-emp-text1">PRIVAT DARLEHEN</text>
                        <br></br>
                        <p className= "App-text3">Kredit, damit Sie Ihre Ziele erreichen: Ihr Zuhause renovieren, Ihre Finanzen neu ordnen, Ihr Geschäft eröffnen, die Traumreise antreten, mit unserem Privatkredit lächelt die Welt und er lächelt zurück.</p>
                    </div>    
                </div>
                <div>
                </div>
                <div>
                    <p className = "App-text3"><text className= "App-emp-text1">Wie stellen Sie Ihre Anfrage?</text> Richten Sie die Kamera Ihres Handys einfach auf den unten stehenden QRCode. Wenn Sie Probleme haben, wird der Link unten verfügbar sein. Fordern Sie jetzt Ihren Kredit an.</p>
                    <img src={QRcode} className="App-QRcode" alt="QRcode" />
                    <p className = "App-text7"><text className = "App-emp-text6">Link: </text>  https://ac7pay.caas.digital/</p>
                </div>
            </div>
        )
    }
}
export default Emprestimo