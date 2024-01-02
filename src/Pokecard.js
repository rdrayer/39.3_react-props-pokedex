import React from 'react';

const Pokecard = ({ id, name, type, base_experience }) => {
    return (
        <div className="pokecard">
            <h1>{name}</h1>
            <p>Type: {type}</p>
            <p>Base Experience: {base_experience}</p>
        </div>
    )
}

export default Pokecard;