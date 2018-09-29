
import React, {Component} from 'react';
import ListaPost from '../postagem/ListaPost';

class Perfil extends Component {
    constructor (props){
        super(props);
        this.state = {
            postagens: [
                {
                    uid: '1',
                    content: 'Primeira postagem',
                    author: '1',
                    timestamp: Date.now(),
                    authorName: 'Elton',
                    authorUserName: '@elton'
                },
                {
                    uid: '2',
                    content: 'Segunda postagem',
                    author: '1',
                    timestamp: Date.now(),
                    authorName: 'Elton',
                    authorUserName: '@elton'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div>Foto</div>
                <div>Nome</div>
                <div>Usuário</div>
                <br />
                <ListaPost postagens={this.state.postagens}/>
            </div>
        );
    }
}

export default Perfil;