import { useState } from "react";
import "./index.scss";
import cuadroVerde from "../../assets/cuadroVerde.png";
import barcode from "../../assets/barcode.png";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  marginBottom: "10rem",
  marginRight: "1rem",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const styleModal = {
  width: "auto",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#000000b9",

};

const Formulario = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Datos-container">
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        sx={styleModal}
      >
        <Box sx={style}>
          <p id="child-modal-description">
            No es posible continuar el proceso: Error en el servicio de Consulta
            de ICCID: 3 - Región Diferente
          </p>
          <Button onClick={handleClose}>Aceptar</Button>
        </Box>
      </Modal>
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
          <select name="tipoDePlan">
            <option value="" disabled defaultValue>
              Seleccionar la promoción
            </option>

            <option value="">
              1.Amigo Normal recarga 50 y obtén paquete 100 por 3 meses SL
            </option>

            <option value="">
              2.Amigo Normal recarga 100 y obtén paquete 200 por 5 meses SL
            </option>
          </select>
        </div>
      </div>
      <div className="NIPcontainer">
        <div className="NIP">
          <p>NIP</p>
          <input type="text" />
        </div>

        <div className="confNIP">
          <p>Confirmar NIP</p>
          <input type="text" />
        </div>
      </div>

      <div className="ICCID">
        <p>ICCID</p>
        <input type="text" />
      </div>

      <div className="botContainer">
        <div className="IMEI">
          <p>IMEI</p>
          <input type="text" />
        </div>
        <div className="codigoBarras">
          <img src={barcode} alt="" />
        </div>
      </div>
      <div className="botonModal">
        <button onClick={handleOpen}>Ejemplo de error</button>
      </div>
    </div>
  );
};

export default Formulario;
