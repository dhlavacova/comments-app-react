import React from 'react';
import ComentarItem from "../ComentarItem/ComentarItem.jsx";

const ComponentListe = ({children}) => {
    return (
        <div className='list-container'>
            {children}
        </div>
    );
};

export default ComponentListe;