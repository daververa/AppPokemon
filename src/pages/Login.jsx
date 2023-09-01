import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/login.css';


const Login = () => {

    const [email, SetEmail] = useState('');
    const [pass, SetPass] = useState('');
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false);

    const iniciarSesion = async (event) => {
        event.preventDefault();

        const respuesta = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, pass })
        });

        // console.log(respuesta.json())

        const datos = await respuesta.json();

        if (datos.response) {
            navigate('/')
        }
        else {
            setLoginError(true);

            setTimeout(() => {
                setLoginError(false);
            }, 5000)
        }

    }

    return (
        <div className='login-container'>
            <form onSubmit={iniciarSesion} className='login-form'>
                <h2>Iniciar sesión</h2>
                <input type='text' placeholder='Nombre de usuario' value={email} onChange={(event) => SetEmail(event.target.value)} />
                <input type='password' placeholder='Contraseña' value={pass} onChange={(event) => SetPass(event.target.value)} />
                <button type='Submit' >Iniciar sesión</button>

                {
                    loginError && (
                        <div className='alert alert-danger alerta' >
                            Credenciales incorrectas. Por favor, intente nuevamente
                        </div>
                    )
                }

            </form>
        </div>
    )
}

export default Login
