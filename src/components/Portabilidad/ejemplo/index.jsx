import React from "react";
import styled from "styled-components";
import "./index.scss";
import { Link } from "react-router-dom";
import cuadroVerde from '../../assets/cuadroVerde.png';
import barcode from '../../assets/barcode.png';

const Ejemplo = () => {
    return(
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
                        <Link>
                            Regresar
                        </Link>
                    </button>
                    <button>
                        <Link>
                            Siguiente
                        </Link>
                    </button>
                <div>
                    <div className="Overlay">
                        <div className="ContenedorModal">
                            <div className="TextoModal">
                                <h3>No es posible continuar el
                                    proceso: Error en el servicio de
                                    Consulta de ICCID: 3 - Región
                                    Diferente
                                </h3>
                            </div>
                            <Boton>
                                <Link to='/menu/solicitud/datos'>
                                    Aceptar
                                </Link>
                            </Boton>
                        </div>
                    </div>
                    <ContenedorBotones>
                        <Boton>
                            Ejemplo de error
                        </Boton>
                    </ContenedorBotones>
                </div>
                </div>
            </div>
        </>
    );
}

export default Ejemplo;

const Overlay = styled.div`
    width: 33vw;
    heigh: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div `
    width: 500px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const TextoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 16px;
        color: #000000;
    }
`;

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