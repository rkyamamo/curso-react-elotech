import React from 'react';
import {Button} from 'react-bootstrap';
import FieldGroup from '../field/FieldGroup';

const Postar = ({conteudo, handlePostar, handleChange}) => {
    return (
        <form className="form-group">
            <FieldGroup maxlength={280} id="formControlsConteudo" label="Conteúdo:" type="textarea" name="conteudo" value={conteudo} onChange={handleChange}/>
            <Button variant="success" onClick={handlePostar}>Postar</Button>
        </form>
    );
}

export default Postar;