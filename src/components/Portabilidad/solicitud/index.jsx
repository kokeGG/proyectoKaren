import React from "react";

const Solicitud = () => {

    const handleSubmit = ({ values }) => {

    }
    return(
        <>
            <div className="containerStyles">
                <div className="title">
                    <h1>Solicitud en línea</h1>
                </div>
                <div>
                        <div>
                            <p>REGISTRAR SOLICITUD EN LINEA</p>
                        </div>

                        <div>
                            <p>Inicie la captura</p>
                        </div>

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
            </div>
        </>
    );
};

export default Solicitud;