import React, { useState } from 'react'
import { login } from '../services/data'; // Se importa asi ya que a la exportacion del login no se le puso "default" de extra

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');
    const [mensaje, setMensaje] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        //otra forma de hacerlo es
        //const usuario = e.target.usuario.value;
        //const pass = e.target.pass.value;
        const {usuario,pass} = Object.fromEntries(new FormData(e.target));
        
    
    }

    return(
        <>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                Usuario <input name='usuario' type="text"/>
                Contraseña <input name='pass' type="password" id='pass'/>
                <input type="submit" value="Iniciar Sesión"/>
            </form>
        </>
    )


}