import React from 'react'

export default class PlaylistDetails extends React.Component {

    state ={
        tracks: []
    }

    render(props) {
        return (
            <div>
                <form>
                    <div>
                        <label>Nome da música: </label>
                        <input placeholder="" type="text" />
                    </div>
                    <div>
                        <label>Artista: </label>
                        <input placeholder="" type="text" />
                    </div>
                    <div>
                        <label>URL da música: </label>
                        <input placeholder="" type="text" />
                    </div>
                    <button type="submit">Adicionar Música</button>
                </form>
                <button onClick={() => {this.props.alterarPage("playlists")}}>Voltar para Playlists</button>
            </div>
        )
    }
}
