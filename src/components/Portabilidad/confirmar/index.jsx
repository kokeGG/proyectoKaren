import React from "react";
import './index.scss';
import { Link } from "react-router-dom";

const Confirmar = () => {
    return (
        <>
            <div className="confContainer">
                <div className="datosU">
                    <h4>Usuario:</h4>
                    <p>18CESL85120161264</p>
                    <h4>Region:</h4>
                    <h5>9</h5>
                </div>
                <h2>Confirma solicitud en linea</h2>
                <div className="telContainer">
                    <h4>Teléfono</h4>
                    <p>1234567890</p>
                </div>
                <div className="IDCOP">
                    <h4>IDCOP</h4>
                    <p>18818071810921</p>
                </div>
                <div className="promo">
                    <h4>Promoción</h4>
                    <p>1.Amigo Normal recarga 50 y obtén paquete 100 por 3 meses SL</p>
                </div>
                <div className="nombre">
                    <h4>Nombre(s)</h4>
                    <p>Nombre(s)</p>
                </div>
                <div className="apellidoP">
                    <h4>Apellido Paterno</h4>
                    <p>Apellido Paterno</p>
                </div>
                <div className="apellidoM">
                    <h4>Apellido Materno</h4>
                    <p>Apellido Materno</p>
                </div>
                <div className="curp">
                    <h4>CURP</h4>
                    <p>RUJJ891001MDFZMS08</p>
                </div>
                <div className="IMEI">
                    <h4>IMEI</h4>
                    <p>234523455432345</p>
                </div>
                <div className="ICCID">
                    <h4>ICCID</h4>
                    <p>1234561234561234567</p>
                </div>
                <div className="btnContainer">
                    <button>
                        <Link to='/fin'>
                            Siguiente
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Confirmar;