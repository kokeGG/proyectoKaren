import React from "react";
import { Link } from "react-router-dom";
import './index.scss';
import cuadroVerde from '../../assets/cuadroVerde.png';
import barcode from '../../assets/barcode.png';
import styled from "styled-components";

const Datos = () => {
    // const state = {
    //     estadoModal1: false
    // }
    let estadoModal1 = false;

    return (
        <>
            <div className="Datos-container">
                <div className="valorCliente">
                    <p>Valor Cliente</p>
                    <div className="cuadroVerde">
                        <img src={cuadroVerde} />
                    </div>
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
                <div className="NIP">
                    <p>NIP</p>
                    <input
                        type="text"
                        />
                </div>

                <div className="confNIP">
                    <p>Confirmar NIP</p>
                    <input
                        type="text"
                        />
                </div>

                <div className="ICCID">
                    <p>ICCID</p>
                    <input
                        type="text"
                        />
                </div>

                <div className="codigoBarras">
                    <img src={barcode} alt="" />
                </div>

                <div className="IMEI">
                    <p>IMEI</p>
                    <input
                        type="text"
                    />
                </div>
                <div className="botones">
                    <button>
                        <Link to='/menu/solicitud'>
                            Regresar
                        </Link>
                    </button>
                    <button>
                        <Link to='/menu/solicitud/datos/confirmar'>
                            Siguiente
                        </Link>
                    </button>
                <div>
                    <ContenedorBotones>
                        <Boton>
                            <Link to='/ejemplo'>
                                Ejemplo de error
                            </Link>
                        </Boton>
                    </ContenedorBotones>
                </div>
                </div>
            </div>
        </>
    );

}
const ContenedorBotones = styled.div`
padding: 40px;
display: flex;
    flex-wrap;
    justify-content: center;
    gap: 20px;
`;

const Boton = styled.div`
    display: block;
    padding: 10px 30px;
    border-radius: 100px;
    color: #fff;
    border: none;
    background: #1766DC;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: .3s ease all;

    &:hover {
        background: #0066FF;
    }
    a {
        color: white;
        text-decoration: none;
    }

`;

export default Datos;