import React, { useState } from "react";
import uniqid from 'uniqid'

const Formulario = () => {
    /* ESTADOS */
    const [nombre,setNombre] = useState("")
    const [listaNombres,setListaNombres] = useState([])

    /* FUNCIONES */
    const addNombre = (e) =>{
        e.preventDefault()
        const nuevoNombre = {
          id:uniqid(),
          nNombre:nombre
        }
        setListaNombres([...listaNombres,nuevoNombre])
    }
  return (
    <div className="container">
      <h1>CRUD BÁSICO</h1>

      {/* CREA LOS CONTENEDORES */}
      <div className="row">

        {/* VISTA */}
        <div className="col">
          <h2>Lista de Usuarios</h2>
          <ul className="list-group">
              {
                  listaNombres.map(el=>
                      <li key={el.id} className="list-group-item">{el.nNombre}</li>
                  )
              }
          </ul>
        </div>

        {/* AGREGANDO A LOS USUARIOS */}
        <div className="col">
          <h2>Formulario para añadir nombres</h2>


          {/* formulario */}
          <form onSubmit={addNombre}>
            <div>
              <input 
              className="form-control" 
              type="text" 
              onChange = {(e)=>setNombre(e.target.value)}
              />
            </div>
            <button 
            className="btn btn-primary">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
