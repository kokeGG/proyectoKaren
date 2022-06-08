import React from "react";
import { Link } from "react-router-dom";
import './index.scss';
import curpbtn from '../../assets/curpbtn.png'

const Solicitud = () => {

    
    return (
        <>
            <div className="containerStyles">
                <div className="title">
                    <h1>Solicitud en línea</h1>
                </div>
                <div>
                    <div className="subtitle">
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
                        <p>Teléfono</p>
                        <input
                            type="text"
                            placeholder="Teléfono"
                            />

                        <p>Nombre(s)</p>
                        <input
                            type="text"
                            placeholder="Nombre (s)"
                        />
                    </div>
                    <div className="input-container-mid">
                        <p>Apellido Paterno</p>
                        <input
                            type="text"
                            placeholder="Apellido Paterno"
                        />

                        <p>Apellido Materno</p>
                        <input
                            type="text"
                            placeholder="Apellido Materno"
                        />
                    </div>
                    <div className="input-container-bot">
                        <p>CURP</p>
                        <input
                            type="text"
                            placeholder="CURP"
                        />
                        <button className="btn-search">
                            <img src={curpbtn}/>
                        </button>
                    </div>
                    <div className="button-next">
                        <button>
                            <Link to=''>
                                SIGUIENTE
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solicitud;