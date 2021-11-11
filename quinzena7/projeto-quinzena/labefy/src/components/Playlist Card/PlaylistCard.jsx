import React from 'react'

const PlaylistCard = (props) => {
    return (
        <div>
            <button onClick={() => {props.alterarPage("playlistsDetails")}}>Abrir Playlist</button>
            <p>{props.nome}</p>
            <p>x</p>
        
        </div>
    )
}

export default PlaylistCard;
