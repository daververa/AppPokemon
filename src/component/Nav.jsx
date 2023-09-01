import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/nav.css';
import BurguerButton from './BurguerButton';


const Nav = () => {
    const [clicked, setClicked] = useState(false);

    function presClicked() {
        setClicked(!clicked);
    }


    return (
        <>
            <div className='NavContainer'>
                <h2>Navar <span>Responsive</span> </h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link to='/' onClick={presClicked}>Home</Link>
                    <Link to='/login' onClick={presClicked}>Login</Link>
                    <Link to='/form' onClick={presClicked}>Formulario</Link>
                    <Link to='/pokemon-List' onClick={presClicked}>Lista Pokemon</Link>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} presClicked={presClicked} />
                </div>
                <div className={`inicial ${clicked ? 'active' : ''}`}></div>
            </div>
        </>

    )
}

export default Nav
