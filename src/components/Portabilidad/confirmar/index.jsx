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
                    <p>5549495020</p>
                </div>
                <div className="IDCOP">
                    <h4>IDCOP</h4>
                    <p>18822060155189</p>
                </div>
                <div className="promo">
                    <h4>Promoción</h4>
                    <p>2.Amigo Normal recarga 100 y obtén paquete 200 por 5 meses SL</p>
                </div>
                <div className="nombre">
                    <h4>Nombre(s)</h4>
                    <p>Camilo</p>
                </div>
                <div className="apellidoP">
                    <h4>Apellido Paterno</h4>
                    <p>Valencia</p>
                </div>
                <div className="apellidoM">
                    <h4>Apellido Materno</h4>
                    <p>Hernandez</p>
                </div>
                <div className="curp">
                    <h4>CURP</h4>
                    <p>VARC890528VCXRSR04</p>
                </div>
                <div className="IMEI">
                    <h4>IMEI</h4>
                    <p>123456789123456</p>
                </div>
                <div className="ICCID">
                    <h4>ICCID</h4>
                    <p>1234567891234567891</p>
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