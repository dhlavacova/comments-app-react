import {useState} from 'react';
import styles from './Form.module.scss';
const Form = ({setData}) => {
    console.log(styles)
    const [comentar, setComentar] = useState('')
    const [name, setName] = useState('')
    const submitHanlde = (e) => {
        e.preventDefault();
        console.log('klik')
        const neuComentar={
            id: crypto.randomUUID(),
            name,
            comentar
            }

        setData((prevdata)=>[...prevdata,neuComentar])
    }
    return (
        <div className={styles.formularContainer}>
            <form onSubmit={submitHanlde}>
                <label htmlFor="textarea">Your comentar</label>
                <textarea name="textarea"
                          id="textarea"
                          value={comentar}
                          cols="50"
                          rows="5"
                          onChange={(e) => setComentar(e.target.value)}></textarea>
                <label htmlFor="name">Name</label>
                <input type="text"
                       id="name"
                       placeholder='your name'
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" value="send"/>
            </form>
        </div>
    );
};

export default Form;