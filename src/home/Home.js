import React, { Component } from 'react';
import Postar from '../postagem/Postar';
import ListaPost from '../postagem/ListaPost';

class Home extends Component {

    constructor (props){
        super(props);
        console.log(props);
        this.state = {
            conteudo: ''
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {postagens, handlePostar} = this.props;
        return (
            <div className="container">
                <Postar conteudo={this.state.conteudo} 
                    handleChange={this.handleChange}
                    handlePostar={() => handlePostar(this.state.conteudo)}/>
                <br/>
                <ListaPost postagens={postagens}/>
            </div>
        )
    };
}


export default Home;
