import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './style.css'

function Formulario(props) {

  

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    

    function aoSalvar(evento){
        evento.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')    
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados acima para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterar={valor => setNome(valor) }
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor) }
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor) }
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.times} 
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;