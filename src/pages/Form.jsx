import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
    });

    const InputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(event.target.value);
    }

    const SubmitForm = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='container contenedor'>
            <h1> Formulario</h1>
            <form onSubmit={SubmitForm}>
                <div className='mb-3'>
                    <label className='form-label'>Primer Nombre</label>
                    <input type='text' className='form-control' id='nombre' name='nombre' value={formData.nombre} onChange={InputChange} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellidos</label>
                    <input type='text' className='form-control' id='apellidos' name='apellidos' value={formData.apellidos} onChange={InputChange} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input type='text' className='form-control' id='email' name='email' value={formData.correo} onChange={InputChange} />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form


