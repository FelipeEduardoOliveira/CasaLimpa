import React, { useEffect, useState } from 'react';
import './styles.css';
import {cadastraUser} from '../../Service/api';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AutorenewIcon from '@material-ui/icons/Autorenew';

function CadastraUsuario(){

const [photo, setPhoto] = useState('');
const [photoName, setPhotoName] = useState('');
const [rodarIcon, setRodarIcon] = useState(0);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [celular, setCelular] = useState('');
const [endereco, setEndereco] = useState('');
const [tipo, setTipo] = useState('');



const cleanFields = ()=>{
    setRodarIcon(1);
    setName('');
    setEmail('');
    setCelular('');
    setEndereco('');
    setTipo('');
    setPhoto('');
    setPhotoName('');
}

useEffect(()=>{

    setTimeout(function(){ setRodarIcon(0); }, 2000);

},[rodarIcon])

const saveUser = ()=>{

  if(name === ''|| email === '' || celular === '' || endereco === '' || tipo === ''){
      alert('Ops, revise todos os campos');
      return
  }

  cadastraUser(name, email, endereco, celular, tipo)
  .then((response)=>{
    alert('Usuario cadastrado com sucesso!');
    console.log(response);
    cleanFields();
  })
  .catch((err)=>{
    alert('Erro ao cadastrar o usuário');
    console.log(err);    
  })
}



    const updatePhoto = (e)=>{
setPhoto(URL.createObjectURL(e.target.files[0]));
setPhotoName(e.target.files[0].name);
    }


    return(
        <div className='CadastraUsuarioContainer'>
           <div className='ContainerForm'>
          
           <div className='ContainerFoto'>
           <div className='ContainerFotoCard'>
            {photo!==''&&(<img src={photo} title={photoName} alt='Foto do usuario'/>)}
            </div>
            <div>
                   
                   <label for='input-file'>
                     <PhotoCameraIcon /> 
                    </label>

                    <input 
                    id='input-file' 
                    type='file' 
                    onChange={(e)=>updatePhoto(e)}
                    />
                </div>
           </div>


           <div className='ContainerInputsForm'>
           <TextField 
           id="standard-basic" 
           label="Nome" 
           onChange={(e)=>setName(e.target.value)}
           value={name}
           />
           <TextField 
           id="standard-basic" 
           label="Email" 
           onChange={(e)=>setEmail(e.target.value)} 
           value={email}
           />
           <TextField 
           id="standard-basic" 
           label="Endereço" 
           onChange={(e)=>setEndereco(e.target.value)}
           value={endereco}
           />
           <TextField 
           id="standard-basic" 
           label="Celular" 
           onChange={(e)=>setCelular(e.target.value)}
           value={celular}
           />
           </div>

           <div>
           <FormControl component="fieldset">
      <FormLabel component="legend">Tipo</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" onChange={(e)=>setTipo(e.target.value)} value={tipo}>
        <FormControlLabel value="Gerador" control={<Radio />} label="Gerador" />
        <FormControlLabel value="Catador" control={<Radio />} label="Catador" />
        <FormControlLabel value="Deposito" control={<Radio />} label="Deposito" />
        <FormControlLabel value="Coletador" control={<Radio />} label="Coletador" />
      </RadioGroup>
    </FormControl>
           </div>
           </div>

           <div className='ContainerButtons'>
           <Button
           
        variant="contained"
        color="default"
        size="small"
        startIcon={<AutorenewIcon className={rodarIcon==1&&('girarIcon')}/>}
        onClick={()=>cleanFields()}
      >
        Limpar
      </Button>
                <Button
        variant="contained"
        color="primary"
        size="small"
        // className={classes.button}
        startIcon={<SaveIcon />}
        onClick={()=>saveUser()}
      >
        Save
      </Button>
           </div>

        </div>
    );
}

export default CadastraUsuario;