const axios = require('axios')

const authActions = {

    registrarUsuario: (userName,password) =>{
        return async(dispatch, getState)=>{
            try {
                // eslint-disable-next-line
                const user = await axios.post('http://localhost:4000/api/auth/signUp',{userName,password})
                if(user.data.success && !user.data.error){
                    console.log(user)
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'usuario', payload:{userName}})
                }else{
                    // alert(user.data.error)
                    console.log(user.data.response)
                    alert(user.data.error)
                    return user.data.response
                }
            }catch(error){
                console.log(error)
            }
        }
    },
    iniciarSesion: (userName,password, google) => {
        return async(dispatch, getState)=>{
            try {
                const user = await axios.post('http://localhost:4000/api/auth/signIn',{userName, password, })
                if(user.data.success && !user.data.error){
                    localStorage.setItem('token',user.data.response.token)
                    dispatch({type:'usuario', payload:{userName:user.data.response.userName}})
                   
                    
                    alert("Welcome back " + user.data.response.userName)
                    return {user}
                }else{
                    if(google){
                        alert("You have to sign up before you log in")
                    }else{
                    console.log(user.data.error)
                    alert(user.data.error)
                    // alert(user.data.error)
                    }
                }
            }catch(error){
                console.log(error)
            }
        }
    }
}

module.exports = authActions