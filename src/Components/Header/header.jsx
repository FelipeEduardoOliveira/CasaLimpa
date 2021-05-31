import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';


export default function Header(){
    return(
        <div className='HeaderContainer'>
           <div className='HeaderLogo'>
               <img src={Logo} alt='Logotipo da empresa' />
           </div>

           <div className='HeaderMenu'>
               <Link to='/'>
                   <AddIcon/>
                   Novo Usuario
               </Link>
               <span>
                   |
               </span>
               <Link to ='/usuarios'>
                   <PersonIcon/>
                   Usuarios
               </Link>
           </div>
        </div>
    );
}