import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import FieldGroup from '../field/FieldGroup';

class Configuracao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            userName: '',
            displayName: '',
            photoURL: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSalvar = () => {
        console.log('Salvar');
    }

    render() {
        return (
            <Form>
                <Col sm={4}>
                    <FieldGroup id="formControlsNome" label="Nome:" type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange}/>
                </Col>
                <Col sm={4}>
                    <FieldGroup id="formControlsUsuario" label="Usuário:" type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                </Col>
                <Col sm={4}>
                    <FieldGroup id="formControlsPhotoURL" label="Url da foto:" type="text" name="photoURL" value={this.state.photoURL} onChange={this.handleChange}/>
                </Col>
                <Col sm={12}>
                    <Button variant="success" onClick={this.handleSalvar}>Salvar</Button>
                </Col>
            </Form>


        );
    }
}

export default Configuracao;