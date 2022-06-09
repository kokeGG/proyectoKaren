import React from "react";
import { Link } from "react-router-dom";
import './index.scss';
import curpbtn from '../../assets/curpbtn.png'

const Solicitud = () => {


    return (
        <>
            <div className="solicitud-container">
                <h1>Solicitud en línea</h1>

                <div className="subtitle1">
                    <p>REGISTRAR SOLICITUD EN LINEA</p>
                </div>

                <div className="subtitle2">
                    <p>Inicie la captura</p>
                </div>

                <div className="cmb-plan">
                    <p>Tipo de Plan</p>
                    <select
                        name="tipoDePlan"
                    >
                        <option
                            value=""
                            disabled
                            defaultValue
                        >
                            Seleccionar
                        </option>

                        <option
                            value=""
                        >
                            NORMAL
                        </option>

                        <option
                            value=""
                        >
                            AMIGO KIT ARMADO
                        </option>

                        <option
                            value=""
                        >
                            AMIGO KIT DESARMADO
                        </option>
                    </select>
                </div>

                <div className="input-container-top">
                    <div className="tel">
                        <p>Teléfono</p>
                        <input
                            type="text"
                            placeholder="Teléfono"
                        />
                    </div>

                    <div className="nombre">
                        <p>Nombre(s)</p>
                        <input
                            type="text"
                            placeholder="Nombre (s)"
                        />
                    </div>
                </div>
                <div className="input-container-mid">
                    <div className="apeP">

                        <p>Apellido Paterno</p>
                        <input
                            type="text"
                            placeholder="Apellido Paterno"
                        />
                    </div>
                    <div className="apeM">
                        <p>Apellido Materno</p>
                        <input
                            type="text"
                            placeholder="Apellido Materno"
                        />
                    </div>
                </div>
                <div className="input-container-bot">
                    <div className="curp">
                        <p>CURP</p>
                        <input
                            type="text"
                            placeholder="CURP"
                        />
                    </div>
                    <div className="searchContainer">
                        <button className="btn-search">
                            <Link to='/menu/solicitud/curp'>
                                <img src={curpbtn} />

                            </Link>
                        </button>

                    </div>
                </div>
                <div className="button-next">
                    <button>
                        <Link to='/menu/solicitud/datos'>
                            siguiente
                        </Link>
                    </button>
                </div>

            </div>
        </>
    );
};

export default Solicitud;