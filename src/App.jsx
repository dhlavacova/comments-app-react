import React, {useState,useEffect} from "react";
import './App.css'
import Form from "./componenten/Form/Form.jsx";
import ComponentListe from "./componenten/ComentarListe/ComponentListe.jsx";
import ComentarItem from "./componenten/ComentarItem/ComentarItem.jsx";
function App() {

const [data,setData] = useState(() => {
    const storedData = localStorage.getItem('comentar')
    return storedData ? JSON.parse(storedData) : []
})



    useEffect(( )=>{
    localStorage.setItem('comentar', JSON.stringify(data))

}, [data]);




  return (
    <div className="App">
        <ComponentListe >
            <ComentarItem data={data} setData={setData}   />
            </ComponentListe>
            <Form setData={setData}/>
    </div>
  )
}

export default App
