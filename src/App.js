import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";

import Home from './home/Home';
import Header from './header/Header';
import Configuracao from './configuracao/Configuracao'
import Perfil from './perfil/Perfil';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logado: true,
      usuarioLogado: {
        uid: '1',
        userName: '@elton',
        displayName: 'Elton',
        photoURL: '',
        email: 'elton@twitter.com'
      },
      postagens: [
        {
            uid: '1',
            content: 'Primeira postagem',
            author: '1',
            timestamp: Date.now(),
            authorName: 'Elton',
            authorUserName: '@elton'
        }
      ]
    }
  }

  onLogin = () => {
    this.setState({ logado: true });
  }

  onLogout = () => {
    this.setState({ logado: false });
    this.props.history.push('/');
  }

  handlePostar = (conteudo) => {
      const postagens = [ 
        {
            content: conteudo
        },
        ...this.state.postagens];
      this.setState({postagens});
  }

  render() {
    return (

      <div className="App">
        <div>
          <Header logado={this.state.logado} onLogin={this.onLogin} onLogout={this.onLogout} uid={this.state.uid} />
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} usuarioLogado={this.state.usuarioLogado} postagens={this.state.postagens} handlePostar={this.handlePostar}/>} />
            <Route path="/configuracao" exact render={(props) => <Configuracao {...props} usuarioLogado={this.state.usuarioLogado}/>} />
            <Route path="/perfil" exact render={(props) => <Perfil {...props} usuarioLogado={this.state.usuarioLogado}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
