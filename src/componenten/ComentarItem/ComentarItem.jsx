import React from 'react';
import './ComentarItem.scss'

const ComentarItem = ({data, setData}) => {

    const deleteCommentar = (id) => {
        const deletedCommentar = data.filter((comment) => comment.id !== id)
        setData(deletedCommentar);
    }
    return (
        <div className="comentarContainer">
            <h2>{data.length} Kommentar</h2>

            <ul>
                {data.map((el, index) =>
                    <li
                        key={index}>
                        <div className="name">{el.name}</div>
                        <div>{el.time}</div>
                        <p className="paragraf">{el.comentar}</p>
                        <a onClick={() => deleteCommentar(el.id)}>Delete</a>

                    </li>
                )}
            </ul>
        </div>
    );
};

export default ComentarItem;