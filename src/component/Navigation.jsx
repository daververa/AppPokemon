import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export const Navigation = () => {
    return (
        <>
            {/* <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/pokemon-List">Lista Pokemon</Link>
                        </li>
                    </ul>
                </nav>
            </div> */}
            <Nav />
            <Outlet />
        </>
    )
}

