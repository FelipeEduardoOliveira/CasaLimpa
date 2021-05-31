import React, { useEffect, useState } from 'react';
import ListUser from '../../Components/ListUser/ListUser';
import { GetUsers } from '../../Service/api';
import './style.css';

export default function Usuarios(){

    const [nameUser, setName] = useState('');

      const listUser = ()=>{
        GetUsers()
            .then((snapshot)=>{
            let list = [];

            snapshot.forEach((doc)=>{
                list.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    tipo: doc.data().tipo,
                    email: doc.data().email,
                    endereco: doc.data().endereco,
                    celular: doc.data().celular
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

    return(
        <div className='UsuariosContainerList'>

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
                            />
                        );

            })}
                </div>
            }
           
           

           
        </div>
    );
}