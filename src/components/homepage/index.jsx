import React from "react";
import { Link } from 'react-router-dom';
import './index.scss';

const Homepage = () => (
    <>
        <div className="login-container">
            <div className="login-info-container">
                <img src="https://www.telcel.com/content/dam/htmls/img/icons/logo-telcel.svg" alt="Logo TELCEL" />
                <div className="inputs-container">
                    <input className="input" type="text" placeholder="Username" />
                    <input className="input" type="password" placeholder="Password" />
                    <div>
                        <select name="Region" id="cmb">
                            <option value="selec">[Seleccionar Región]</option>
                            <option value="r1">Region 1</option>
                            <option value="r2">Region 2</option>
                            <option value="r3">Region 3</option>
                            <option value="r4">Region 4</option>
                            <option value="r5">Region 5</option>
                            <option value="r6">Region 6</option>
                            <option value="r7">Region 7</option>
                        </select>
                    </div>
                    <button className="btn">
                        <Link to='/menu'>
                            INGRESAR
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </>
);

export default Homepage;