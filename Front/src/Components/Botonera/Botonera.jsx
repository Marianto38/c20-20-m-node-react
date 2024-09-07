import React from "react";
import { NavLink } from "react-router-dom";

import "./Botonera.css";

const Botonera = ({ isValid, touched }) => {
    const isFormTouched = Object.values(touched).some((field) => field === true);

    console.log(isValid)
    console.log(isFormTouched)
  return (
    <div className="botonera">
      <NavLink to={"/"} className="boton">
        Volver
      </NavLink>
      <button
        className={`${!isFormTouched ? "boton boton-desactivado" : "boton aceptar"}`}
        type="submit"
        disabled={!isFormTouched}
      >
        Aceptar
      </button>
    </div>
  );
};

export default Botonera;
