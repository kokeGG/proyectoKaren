import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import "react-widgets/DatePicker";
import DatePicker from "react-widgets/DatePicker";
import { Combobox } from "react-widgets/cjs";
import "react-widgets/styles.css";

const Curp = () => {
  return (
    <>
      <div className="curp-container">
        <div className="genders">
          <div className="title">
            <p>Genero</p>
          </div>
          <div className="checkboxes">
            <label>
              <input type="checkbox" name="genre" value="Masculino" />
              Masculino
            </label>
            <label>
              <input type="checkbox" name="genre" value="Femenino" />
              Femenino
            </label>
          </div>
        </div>
        <div className="fechaN">
          <p>Fecha de Nacimiento</p>
          <DatePicker
            defaultValue={new Date()}
            valueEditFormat={{ dateStyle: "short" }}
            valueDisplayFormat={{ dateStyle: "medium" }}
          />
        </div>
        <div className="estados">
          <p>Entidad Federativa</p>
          <Combobox
            data={[
              "Aguascalientes",
              "Baja California",
              "Baja California Sur",
              "Campeche",
              "Chiapas",
              "Chihuahua",
              "Ciudad de México",
              "Coahuila",
              "Colima",
              "Durango",
              "Estado de México",
              "Guanajuato",
              "Guerrero",
              "Hidalgo",
              "Jalisco",
              "Michoacán",
              "Morelos",
              "Nayarit",
              "Nuevo León",
              "Oaxaca",
              "Puebla",
              "Querétaro",
              "Quintana Roo",
              "San Luis Potosí",
              "Sinaloa",
              "Sonora",
              "Tabasco",
              "Tamaulipas",
              "Tlaxcala",
              "Veracruz",
              "Yucatán",
              "Zacatecas",
            ]}
          />
        </div>

        <div className="name">
          <p>Nombre(s)</p>
          <input type="text" placeholder="Nombre(s)" />
        </div>

        <div className="apellidos">
          <div className="paterno">
            <p>Apellido Paterno</p>
            <input type="text" placeholder="Apellido Paterno" />
          </div>

          <div className="materno">
            <p>Apellido Materno</p>
            <input type="text" placeholder="Apellido Materno" />
          </div>
        </div>

        <div className="button-generar">
          <button>
            <Link to="/menu/solicitudconCURP">Generar</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Curp;
