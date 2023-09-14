import './style.css'

function Rodape() {
    return (
        <footer className='foother'>

            <section>

                <ul>
                    <li>
                        <a href='facebook.com' target='_blank'>
                            <img src='/imagens/imagens/facebook.png' alt='ícone facebook'></img>
                        </a>

                    </li>
                    <li>
                        <a href="instagram.com" target='_blank'>
                            <img src='/imagens/imagens/instagram.png' alt='ícone instagram'></img>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target='_blank'>
                            <img src='/imagens/imagens/twitter.png' alt='íconetwitter'></img>
                        </a>
                    </li>
                </ul>

            </section>

            <section>
                <img src='/imagens/imagens/logo.png' alt='ícone organo'></img>
            </section>

            <section>
                <p>
                    Desenvolvido por Lucas Abreu Araujo
                </p>
            </section>
        </footer>
    )
}

export default Rodape