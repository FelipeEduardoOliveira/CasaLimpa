import React, { useEffect, useState } from 'react';
import ListUser from '../../Components/ListUser/ListUser';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { GetUsers } from '../../Service/api';
import './style.css';

export default function Usuarios(){

    const [nameUser, setName] = useState('');
    const [data, setData] = useState([]);

      const listUser = (data)=>{
        GetUsers(data)
            .then((snapshot)=>{
            let list = [];

            snapshot.forEach((doc)=>{
                list.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    tipo: doc.data().tipo,
                    email: doc.data().email,
                    endereco: doc.data().endereco,
                    celular: doc.data().celular,
                    fotoUrl: doc.data().fotoUrl
                })
            })
            setName(list);
        
        })
        .catch((err)=>{
            console.log(err);
            alert('Algo deu errado')
        });
      }
      

      useEffect(()=>{
        listUser();
      },[]);


      const changeCkecked = (e)=>{
          
            // console.log(e.target.checked);

            if(e.target.checked === true){
                const newElement = e.target.name;

                setData([...data, newElement]);

            }else{
                const array = data;
                const name = e.target.name;
                const index = array.indexOf(name);
               array.splice(index,1);

            }
      }

    return(
        <div className='UsuariosContainerList'>

<div className='FiltroClass'>
               

                <label>
                        <Checkbox
                            // checked={(e)=>changeCkecked(e)}
                            onChange={(e)=>changeCkecked(e)}
                            name="Catador"
                            color="primary"
                        />

                Catador
                </label>

                <label>
                        <Checkbox
                            // checked={state.checkedB}
                            onChange={(e)=>changeCkecked(e)}
                            name="Deposito"
                            color="primary"
                        />

                Deposito
                </label>

                <label>
                        <Checkbox
                            // checked={state.checkedB}
                            onChange={(e)=>changeCkecked(e)}
                            name="Coletor"
                            color="primary"
                        />

                Coletor
                </label>

            <label>
                    <Checkbox
                        // checked={state.checkedB}
                        onChange={(e)=>changeCkecked(e)}
                        name="Gerador"
                        color="primary"
                    />

            Gerador
            </label>

<Button onClick={()=>listUser(data)}>
  <SearchIcon/>
</Button>

            </div>

            {
                nameUser === '' ?
                <div>
                    <h1>Carregando</h1>
                </div>
                :
                <div className='containerListUser'>
                    
                    {
                    nameUser.map((item)=>{

                        return(
                            <ListUser 
                            id={item.id}
                            nome={item.nome}
                            tipo={item.tipo}
                            celular={item.celular}
                            endereco={item.endereco}
                            email={item.email}
                            fotoUrl={item.fotoUrl}
                            />
                        );

            })}
            
           
                </div>
                
            }
           
           

        </div>
    );
}