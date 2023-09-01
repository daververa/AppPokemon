import React from "react";
import "./pokemon.css";


const Pokemon = ({ pokemonData }) => {
    return (
        <div>
            {pokemonData.map(pokemon => (
                <div className="pokemon-card">
                    <div className="pokemon-header">
                        <h2 className="pokemon-name">{pokemon.name}</h2>
                        <img className="pokemon-image" src={pokemon.image} />
                        <div />
                        <div className="pokemon-info">
                            <p className="pokemon-type">Tipo: {pokemon.type}</p>
                        </div>
                    </div>

                    {/* <div key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.image} />
                    <p>Type: {pokemon.type}</p>
                    <p>Descripcion: {pokemon.description}</p>
                    </div> */}

                </div>
            ))}

        </div>
    )

}

export default Pokemon;