import React from 'react';
import './style.css';
import CadastraUsuario from '../../Components/CadastroUsuario/CadastraUsuario';
export default function HomePage(){
    return(
        <div className='HomePageContainer'>
           
           <CadastraUsuario />
           
        </div>
    );
}