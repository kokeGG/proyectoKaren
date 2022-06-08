import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from "../components/homepage";
import { Menu, Solicitud } from "../components/Portabilidad"

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/menu" render={Menu}/>
        <Route exact path="/menu/solicitud" render={Solicitud} />
        <Route exact path="/menu/solicitud/curp" />
        <Route exact path="/menu/solicitud/" />
        <Redirect to="/"/>
    </Switch>
)

export default Routes;