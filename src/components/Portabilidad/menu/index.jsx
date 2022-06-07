import React from "react";
import { Link } from "react-router-dom";
import  CHECK from "../../assets/CHECK.png"
import OBJETIVOS from "../../assets/OBJETIVOS.png"
import  PENDIENTES from "../../assets/PENDIENTES.png"
import  PORTABILIDAD from "../../assets/PORTABILIDAD.png"
import './index.scss'
const Menu = () => (
    <>
        <div className="container">
            <div className="login-info-container">
                <h1>PORTABILIDAD</h1>
                <ul className="opciones">
                    <div className="botones">
                        <img src={CHECK} alt="" />
                        <button className="boton">CHECK</button>
                    </div>
                    <div className="botones">
                        <img src={PORTABILIDAD} alt="" />
                        <button className="boton">
                            <Link to='/menu/solicitud'>
                                INICIAR PORTABILIDAD
                            </Link>
                        </button>
                    </div>
                    <div className="botones">
                        <img src={PENDIENTES} alt="" />
                        <button className="boton">LISTA DE PENDIENTES</button>
                    </div>
                    <div className="botones">
                        <img src={OBJETIVOS} alt="" />
                        <button className="boton">OBJETIVOS</button>
                    </div>
                </ul>
            </div>
        </div>
    </>
);

export default Menu;