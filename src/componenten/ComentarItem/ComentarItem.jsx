import React from 'react';

const ComentarItem = ({data, setData}) => {

    const deleteCommentar = (id)=>{
        const deletedCommentar = data.filter((comment)=>comment.id !== id)
        setData(deletedCommentar);
    }
    return (
        <div>
            <h2>{data.length}</h2>
        <ul>

        {data.map((el, index)=>
        <li key={index}>
            <p>{el.comentar}</p>
            <div>name:{el.name}</div>
            <button onClick={()=>deleteCommentar(el.id)}>Delete</button>
        </li>
        )}
        </ul>
        </div>
    );
};

export default ComentarItem;