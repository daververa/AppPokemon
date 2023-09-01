import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './component/Navigation'
import Form from './pages/Form'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { PokemonList } from './pages/pokemonList'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='Login' element={<Login />}></Route>
                <Route path='Pokemon-List' element={<PokemonList />}></Route>
                <Route path='Form' element={<Form />}></Route>
            </Route>
        </Routes>
    )
}
