import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from "../components/homepage";
import { Menu, Solicitud, Curp, Datos, Confirmar, SolicitudCurp, Ejemplo } from "../components/Portabilidad"

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/menu" render={Menu}/>
        <Route exact path="/menu/solicitud/curp" render={Curp}/>
        <Route exact path="/menu/solicitud" render={Solicitud} />
        <Route exact path="/menu/solicitud/datos" render={Datos} />
        <Route exact path="/menu/solicitud/datos/confirmar" render={Confirmar} />
        <Route exact path="/menu/solicitudconCURP" render={SolicitudCurp}/>
        <Route exact path="/ejemplo" render={Ejemplo}/>
        <Route exact path="/fin" render={() => 
                <h1>FIN</h1>
            } 
        />
        <Redirect to="/"/>
    </Switch>
)

export default Routes;