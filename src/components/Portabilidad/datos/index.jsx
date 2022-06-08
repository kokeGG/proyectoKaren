import React from "react";
import { Link } from "react-router-dom";
import './index.scss';
import cuadroVerde from '../../assets/cuadroVerde.png';

const Datos = () => {

    return (
        <>
            <div className="Datos-container">
                <div className="valorCliente">
                    <p>Valor Cliente</p>
                    <img src={cuadroVerde} />
                </div>
                <h2>DATOS</h2>

                <div className="selecPromo">
                    <p>Seleccionar la promoción</p>
                    <div className="promociones">
                        <select
                            name="tipoDePlan"
                        >
                            <option
                                value=""
                                disabled
                                defaultValue
                            >
                                Seleccionar la promoción
                            </option>

                            <option
                                value=""
                            >
                                1.Amigo Normal recarga 50 y obtén paquete 100 por 3 meses SL
                            </option>

                            <option
                                value=""
                            >
                                2.Amigo Normal recarga 100 y obtén paquete 200 por 5 meses SL
                            </option>
                        </select>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Datos;