import React from 'react'
import { useState } from 'react'
import "./App.css";

const App = () => {
  const cambio=[
    {
      moneda: "euro",
      cambio: 1,
    },{
      moneda:"peso argentino  ",
      cambio:118.6,
    },{
      moneda:"peso colombiano",
      cambio:4543.5,
    },{
      moneda:"peso mexicano",
      cambio:23.2,
    },{
      moneda: "dolar",
      cambio:1.14
    }
    

  ]
  const [cantidad,setCantidad]=useState(0);
  const [resul1,setResul1]=useState(0);
  const [resul2,setResul2]=useState(0);
  const [resul3,setreReul3]=useState(0);
  const [resul4,setResul4]=useState(0);
  const modificar=(e)=>{
    setCantidad(e.target.value);
    setResul1(e.target.value*cambio[1].cambio);
    setResul2(e.target.value*cambio[2].cambio);
     setreReul3(e.target.value*cambio[3].cambio);
    setResul4(e.target.value*cambio[4].cambio);

  }
   
  return (
    <>
     <label htmlFor="u0">{cambio[0].moneda}</label>
     <input id="u0" type="number" value={cantidad} onChange={modificar}/>

     <label htmlFor="u1">{cambio[1].moneda}</label>
     <input id="u1" type="number" value={resul1} readOnly/>

     <label htmlFor="u2">{cambio[2].moneda}</label>
     <input id="u2" type="number" value={resul2} readOnly/>

     <label htmlFor="u3">{cambio[3].moneda}</label>
     <input id="u3" type="number" value={resul3} readOnly/>

     <label htmlFor="u4">{cambio[4].moneda}</label>
     <input id="u4" type="number" value={resul4} readOnly/>

      </>
  
       
    
   
  )
}

export default App
