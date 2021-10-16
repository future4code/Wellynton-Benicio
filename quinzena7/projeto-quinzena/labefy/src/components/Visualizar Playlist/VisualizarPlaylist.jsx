import React from 'react'
import Playlists from '../Playlists/Playlists'
import Playlistdetails from '../PlaylistDetails/PlaylistDetails'

export default class VisualizarPlaylist extends React.Component {
    state = {
        page: "playlists"
    }

    alterarPage = (alterarPage) => {
        this.setState({page: alterarPage})
    }

    render(props) {
       const renderizaPlaylists = () => {
            if(this.state.page === "playlists"){
                return <Playlists
                alterarPage={this.alterarPage}
                on
                />
            }else if(this.state.page === "playlistsDetails"){
                return <Playlistdetails
                alterarPage={this.alterarPage}
                />
            }
        }

        return (
            <div>
                {renderizaPlaylists()}
            </div>
        )
    }
}
