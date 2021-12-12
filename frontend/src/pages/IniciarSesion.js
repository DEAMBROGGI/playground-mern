import React from 'react'
import {connect} from 'react-redux';
import authActions from '../redux/actions/authActions'

import Inputs from '../components/Inputs'
import Header from "../components/Header";
import { GoogleLogin } from 'react-google-login'; // IMPORTAR MODULO GOOGLE 1.2

const IniciarSesion = (props)=>{

    const handleSubmit = async (userName, password)=>{
        props.iniciarSesion(userName,password)
    }

    
    const responseGoogle =  res => {
        console.log(res) //TOMAMOS LA RESPUESTA GOOGLE
        let logGoogleUser = {
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            firstName: res.profileObj.givenName,
            google:true
    }
    
        props.iniciarSesion(logGoogleUser.email, logGoogleUser.password,logGoogleUser.firstName) 
        .then((response ) => {
    
             console.log(response)
                  
        })
        .catch((error) => {
            console.log(error)
            alert("You have to sign up before you log in")
              
        })
    }

    return (
        <div className="container">
            <Header nombreUsuario={props.usuario.userName}/>
            <h1 style={{width: '100%',textAlign:'center'}}> Inicia sesión</h1>
            <main className="main-formulario">
                <Inputs data={{first:'Usuario',second:'Constraseña'}} handleSubmit={handleSubmit}/>
                {/*GENERAMOS RENDERIZADO DE GOOGLE LOGIN*/ }
            </main>
            <GoogleLogin
                    clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com" 
                    buttonText="Log in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
            
        </div>
    )
}

    
const mapStateToProps = (state) =>{
    return {
        usuario: state.authReducer.usuario
    }
 }
 const mapDispatchToProps = {
    iniciarSesion: authActions.iniciarSesion
 }

export default connect(mapStateToProps, mapDispatchToProps)(IniciarSesion)