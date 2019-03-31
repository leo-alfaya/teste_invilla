import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const PaginaInicial = () => {
    return (
        <Grid container justify="center" alignItems="center" direction="column" className="pagina-inicial">
            <Grid item xs={10} className="titulo">
                <Grid container justify="center">
                    <h1 className="titulo">STAR QUIZ</h1>
                </Grid>
            </Grid>
            <Grid item xs={10} className="texto-introducao">
                <Grid container direction="column" justify="center">
                    <p>Bem vindo ao star quiz, um quiz sobre os personagens de Star Wars.</p>
                   <p>Ao entrar no jogo, você verá uma serie de cards, cada um contendo a imagem de um personagem. Cada card contém dois botões: </p>
                   <p>?: Ao clicar, será aberto um formulário onde deverá ser informado o nome do personagem.</p>
                   <p>...: Ao clicar, será aberto um quadro com informações do personagem.</p>
                   <h2>Regras do quiz</h2>
                   <p>Você terá 2 minutos para responder o maior número de personagem possível</p>
                   <p>Ao responder tentar acertar um personagem, este não poderá ser respondido novamente.</p>
                   <h2>Pontuação</h2>
                   <p>Acertar o nome de um personagem sem verificar as informações - 10 pontos</p>
                   <p>Acertar o nome de um personagem verificando as informações - 5 pontos</p>
                   <p>Errar o nome de um personagem - 0 pontos</p>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <Grid container justify="center">
                    <Button 
                        variant="outlined" 
                        className="botao-iniciar"
                        component={ Link } 
                        to="/game">
                        Iniciar o jogo
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PaginaInicial
