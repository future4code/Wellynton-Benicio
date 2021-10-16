import React from 'react'
import { Div, Form, Input, Button} from './Styled'

export default class CadastrarPlaylist extends React.Component {

    state ={
        
    }

    render() {
        return (
            <Div>
                <Form action="">
                    <label htmlFor="#">Cadastre uma nova Playlist</label>
                    <Input placeholder="Escreva aqui o nome da Playlist" type="text" />
                    <Button>Cadastrar Playlist!</Button>
                </Form>
            </Div>
        )
    }
}
