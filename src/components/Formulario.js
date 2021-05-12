import React, { useState } from "react";

const Formulario = () => {
  return (
    <div className="container">
      <h1>CRUD BÁSICO</h1>

      {/* CREA LOS CONTENEDORES */}
      <div className="row">
        {/* VISTA */}
        <div className="col">
          <h2>Lista de Usuarios</h2>
        </div>

        {/* AGREGANDO A LOS USUARIOS */}
        <div className="col">
          <h2>Formulario para añadir nombres</h2>

          {/* formulario */}
          <form>
            <div>
              <input className="form-control" type="text" />
            </div>
            <button className="btn btn-primary">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
