import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './Pages/Home/Home';
import Usuarios from './Pages/Usuarios/Usuarios';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import SimpleBottomNavigation from './Components/NavegacaoInferior';

function Routes(){
return(
    <BrowserRouter>
    <Header />
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/usuarios' component={Usuarios} />
    </Switch>
    <Footer />
    <SimpleBottomNavigation/>
</BrowserRouter>
);

}

export default Routes;