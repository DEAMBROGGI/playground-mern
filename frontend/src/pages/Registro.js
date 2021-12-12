import React from 'react'
import {connect} from 'react-redux';
import authActions from '../redux/actions/authActions'

import Inputs from '../components/Inputs'
import Header from "../components/Header";
import GoogleLogin from 'react-google-login'
const Registro = (props)=>{

    const handleSubmit = async (userName, password)=>{
        console.log(props)
        props.registrarUsuario(userName,password)
        .then((response) => {
            console.log(response)
            if (!response){
                alert('Your account has been created!')
                  
            }
            else{
            alert(response.map(err =>err.message))
            }
        })
        .catch((error) => {
            console.log(error)
            alert(error)
              
        })

    }

    const responseGoogle = async (res) => {
        console.log(res)
        let googleUser = {
        
            email: res.profileObj.email,
            password: res.profileObj.googleId,
            google: true, 
        }
         await props.registrarUsuario( googleUser.email, googleUser.password)
        .then((response) => {
            console.log(response)
            if (!response){
                alert('Your account has been created!')
                  
            }
            else{
            alert(response.map(err =>err.message))
            }
            
        })
        .catch((error) => {
            console.log(error)
            alert('Something went wrong! Come back later!')
              
        })
        
    }

    return (
        <div className="container">
            <Header nombreUsuario={props.usuario.userName}/>
            <h1 style={{width: '100%',textAlign:'center'}}> Registrate</h1>
            <main className="main-formulario">
                <Inputs data={{first:'Usuario',second:'Constraseña'}} handleSubmit={handleSubmit}/>
            </main>
            <GoogleLogin
                    clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
                    buttonText="Sign Up with Google"
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
    registrarUsuario: authActions.registrarUsuario
 }

export default connect(mapStateToProps, mapDispatchToProps)(Registro)