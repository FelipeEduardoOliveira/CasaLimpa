import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';



function ListUser({nome, tipo, celular, endereco, email, id}){


    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 300,
          margin:'10px 10px'
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));
      

        const classes = useStyles();
      

        const sendWhatsApp=(phone, nome)=>{
            const text = `Olá ${nome}, somos da casa limpa`;

            window.open(`https://api.whatsapp.com/send?phone=55${phone}&text=${text}`);
        }

        const sendEmail = (email)=>{

            const titulo = 'Casa Limpa informa';

            window.open(`mailto:${email}?subject=${titulo}`);
        }
        const deleteUser = (id)=>{

            alert(`Tem certeza que deseja exclui o id ${id} ?`)
        }

    return(
        <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {nome.substr(0,2).toLocaleUpperCase()}
            
          </Avatar>
        }
        title={nome}
        subheader={tipo}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Telefone: {celular}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            Endereço: {endereco}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
            Email: {email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={()=>deleteUser(id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="whatsApp" onClick={()=>sendWhatsApp(celular, nome)}>
          <WhatsAppIcon />
        </IconButton>
        <IconButton aria-label="email" onClick={()=>sendEmail(email)}>
          <EmailIcon />
        </IconButton>
       
      </CardActions>
      
    </Card>
    );
}

export default ListUser;