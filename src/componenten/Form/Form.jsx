import {useState} from 'react';
import styles from './Form.module.scss';
const Form = ({setData}) => {
    console.log(styles)
    const [comentar, setComentar] = useState('')
    const [name, setName] = useState('')
const[leerInput,setLeerInput] = useState('')
    const emptyfields = () => {
        setComentar('')
        setName('')
    }
    const submitHanlde = (e) => {
        e.preventDefault();
        console.log('klik')
        if (!name || !comentar) {
            setLeerInput('Name oder Kommentar ist leer')
        }
        else{
        const date = new Date();
        const options = {
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        const currentTime = date.toLocaleString('de-DE', options);


        const neuComentar = {
            id: crypto.randomUUID(),
            name,
            comentar,
            time: currentTime
        }
setLeerInput('')
        setData((prevdata) => [...prevdata, neuComentar])
            emptyfields()
    }

    }


    return (
        <div className={styles.formularContainer}>
            <form onSubmit={submitHanlde} className={styles.bodyForm}>
                <label className={styles.label} htmlFor="textarea">Kommentar</label>
                <textarea name="textarea"
                          className={styles.textarea}
                          id="textarea"
                          value={comentar}
                          cols="50"
                          rows="5"
                          onChange={(e) => setComentar(e.target.value)}></textarea>
                <label className={styles.label} htmlFor="name">Name *</label>
                <input type="text"
                       id="name"
                       className={styles.input}
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <div>{leerInput}</div>
                <input className={styles.sendComent}type="submit" value="Kommentar abschicken"/>

            </form>
        </div>
    );
};

export default Form;