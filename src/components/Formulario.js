import React, { useState } from "react";
import uniqid from "uniqid";

const Formulario = () => {
  /* ESTADOS */
  const [nombre, setNombre] = useState("");
  const [listaNombres, setListaNombres] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);

  const [id, setId] = useState('')

  /* FUNCIONES */
  const addNombre = (e) => {
    e.preventDefault();
    const nuevoNombre = {
      id: uniqid(),
      nNombre: nombre,
    };
    setListaNombres([...listaNombres, nuevoNombre]);
    setNombre("");
  };
  const borrarNombre = (id) => {
    const nuevaLista = listaNombres.filter((item) => item.id != id);
    setListaNombres(nuevaLista);
  };
  const editarNombre = (item) => {
    setModoEdicion(true);
    setNombre(item.nNombre);
    setId(item.id)
  };
  const actualizaNombre = (e)=>{
    e.preventDefault()
    const nuevoArray = listaNombres
    .map(item=>item.id == id ? {id:item.id,nNombre:nombre} : item)
    setListaNombres(nuevoArray)
    setModoEdicion(false)
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
            {listaNombres.map((el) => (
              <li key={el.id} className="list-group-item">
                {el.nNombre}
                <button
                  className="btn btn-danger"
                  onClick={() => borrarNombre(el.id)}
                >
                  Borrar
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => editarNombre(el)}
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* AGREGANDO A LOS USUARIOS */}
        <div className="col">
          <h2>Formulario para añadir nombres</h2>

          {/* formulario */}
          <form onSubmit={modoEdicion?actualizaNombre:addNombre}>
            <div>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Introduce un nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <button className="btn btn-primary">
              {modoEdicion ? "Actualizar" : "Registrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
