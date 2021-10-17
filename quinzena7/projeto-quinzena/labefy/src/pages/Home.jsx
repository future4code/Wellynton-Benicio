import React from 'react'
import Header from '../components/Header/Header';
import CadastrarPlaylist from '../components/Cadastrar Playlist/CadastrarPlaylist'
import VisualizarPlaylist from '../components/Visualizar Playlist/VisualizarPlaylist'
import Footer from '../components/Footer/Footer'

export default class Home extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            page: "CadastrarPlaylist"
        }
    }*/
    state = {
        page: "CadastrarPlaylist"
    }

    alterarPage = (alterarPage) => {
        this.setState({page: alterarPage})
    }


    render(props) {
    const renderizaPage = (page) => {
        if(this.state.page === "CadastrarPlaylist"){
        return <CadastrarPlaylist/>
        }else if(this.state.page === "VisualizarPlaylist"){
        return <VisualizarPlaylist/>
        }
    }

        return (
            <div>
                <Header alterarPage={this.alterarPage}/>
                {renderizaPage()}
                <Footer />
            </div>
            )
          
    }
}