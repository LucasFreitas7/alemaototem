import React, { Component } from 'react';
import Ac7 from './imagens/ac7.jpg'
import Voltar from './imagens/voltar.png'
import { Link } from 'react-router-dom'
import './Emprestimo_Consig.css'
import Propaganda from './imagens/propaganda.png'
import QRcode_Consig from './imagens/qrcode_consig.png'
class Emprestimo_Consig extends Component{
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
                <div className = "div_info_pag2">
                    <div className = "div_info_text">
                    <text className = "App-consig-text1">KREDIT OHNE BÜROKRATIE</text><br></br>
                    <text className = "App-text3">Entdecken Sie unsere Kreditlösungen und nehmen Sie Ihren</text><br></br>
                    <text className = "App-text3"> Kredit schnell, einfach und sicher online auf.</text><br></br>
                    <text className = "App-text3">● Lohndarlehen</text><br></br>
                    <text className = "App-text3">● Refinanzierung</text><br></br>
                    <text className = "App-text3">● Gehaltsabrechnungskarte</text><br></br>
                    <text className = "App-text3">● FGTS-Jubiläumsabzug</text><br></br>
                    <text className = "App-text3">● Persönliches Guthaben</text>
                    </div>
                    <div className = "div_info_img">
                        <img src={Propaganda} className="App-Propaganda" alt="Propaganda" />
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <p className = "App-text3"><text className= "App-consig-text1">Wie stellen Sie Ihre Anfrage?</text> Richten Sie einfach die Kamera Ihres Mobiltelefons auf den untenstehenden QRCode, Sie werden direkt auf unsere Website für konsignierte Kredite, FGTS und andere AC7 Pay-Websites geleitet, simulieren vor Ort und geben Ihre Bestellung auf Ihrem Mobiltelefon auf.</p>
                    <img src={QRcode_Consig} className="App-QRcode_Consig" alt="QRcode_Consig" />
                    <p className = "App-text4"><text className = "App-consig-text1">Link: </text>  https://cobrancas.ac7pay.com/emprestimos/</p>
                </div>
            </div>
        )
    }
}
export default Emprestimo_Consig