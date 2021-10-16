import React from 'react'
import { Div, DivButtons } from "./Styled";

const Header = (props) => {
    return (
        <Div>
            <h1>Labefy</h1>
            <DivButtons>
                <button onClick={() => {props.alterarPage("CadastrarPlaylist")}}>Cadastrar Playlist</button>
                <button onClick={() => {props.alterarPage("VisualizarPlaylist")}}>Visualizar Playlist</button>
                <button>Adicionar Música</button>
                <button>Buscar Músicas</button>
            </DivButtons>
        </Div>
    )
}

export default Header


