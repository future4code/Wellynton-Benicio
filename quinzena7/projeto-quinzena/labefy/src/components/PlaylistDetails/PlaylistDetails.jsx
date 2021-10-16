import React from 'react'

export default class PlaylistDetails extends React.Component {
    render(props) {
        return (
            <div>
                <button onClick={() => {this.props.alterarPage("playlists")}}>Voltar para Playlists</button>
            </div>
        )
    }
}
