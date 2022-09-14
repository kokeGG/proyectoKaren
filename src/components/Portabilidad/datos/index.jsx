import { Link } from "react-router-dom";
import "./index.scss";
import Formulario from "./Formulario";

const Datos = () => {

  return (
    <>
      <div className="Datos-container">
        <Formulario/>

        <div className="botones">
          <button>
            <Link to="/menu/solicitud">Regresar</Link>
          </button>
          <button>
            <Link to="/menu/solicitud/datos/confirmar">Siguiente</Link>
          </button>
        </div>
          
      </div>
    </>
  );
};

export default Datos;
