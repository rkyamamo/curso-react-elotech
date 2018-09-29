import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = ({logado, onLogin, onLogout, uid}) => {

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Twitter</Navbar.Brand>
            <Nav className="ml-auto">
                {
                    logado ? (
                        <div>
                        <Button variant="light" style={{marginRight: 10}} ><Link to="/">Home</Link></Button>
                            <Button variant="light" style={{marginRight: 10}} ><Link to="/configuracao">Configurações</Link></Button>
                            <Button variant="light" style={{marginRight: 10}} ><Link to="/perfil">Meu Perfil</Link></Button>
                            <Button variant="danger" onClick={onLogout}>Sair</Button>
                        </div>
                    )
                    :
                    (
                        <Button variant="sucess" onClick={onLogin}>Login</Button>
                    )
                }
            </Nav>
        </Navbar>
    )
}

export default Header;