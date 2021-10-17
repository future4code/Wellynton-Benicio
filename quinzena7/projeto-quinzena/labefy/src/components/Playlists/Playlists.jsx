import React from 'react'
import PlaylistCard from '../Playlist Card/PlaylistCard'

export default class Playlists extends React.Component {
    state={
        playlists: [
            {
                "id": "d3a8667e-88c0-46b0-b00b-8cfdc6287131",
                "name": "Sertanejo"
            },
            {
                "id": "044a6a05-79c4-4879-a2fa-f911bbeea841",
                "name": "Forró"
            },
            {
                "id": "e28a4d0b-7831-4911-8dcd-bdff7a6ee486",
                "name": "Trap"
            }
        ]
    }
    render(props) {

        const playlists = this.state.playlists.map(playlists => {
            return <PlaylistCard
                key={playlists.id}
                alterarPage={this.props.alterarPage}
                nome={playlists.name}
            />
        })

        return (
            <div>
                {playlists}
            </div>
        )
    }
}
