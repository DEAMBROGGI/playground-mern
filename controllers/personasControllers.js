const Persona = require('../models/Persona') //IMPORTAMOS LOS MODELOS PARA LA DB
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authControllers = {

    // + al momento de registrar usuarios en nuestra aplicación, 
    // + hay situaciones que tenemos tener en cuenta  
    // + cuales son estas situaciones a tener en cuenta ?

    // - 1) que no haya usuarios repetidos
    // - 2) seguridad de la contraseña
    // - 3) validacion de datos


    nuevoUsuario: async(req, res) => {
        
        let { userName, password } = req.body      
        
        console.log(req.body)
        try {

            const usuarioExiste = await Persona.findOne({userName}) //BUSCAR SI EL USUARIO YA EXISTE EN DB
            if (usuarioExiste){
                res.json({success: false, error:"El nombre de usuario ya esta en uso", response:null})
                // EN ESTE PUNTO SI EXITE RESPONDE ERROR 
            }else{
                //SI EL USUARIO NO ESXITE
                const contraseñaHasheada = bcryptjs.hashSync(password, 10) //LO CREA Y ENCRIPTA LA CONTRASEÑA

                // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
                const nuevoUsuario = new Persona({
                    userName, 
                    password:contraseñaHasheada 
                })

                const token = await jwt.sign({...nuevoUsuario}, process.env.SECRET_KEY) // CREA UN TOKEN 
                await nuevoUsuario.save() //SE LO ASIGNA AL USUARIO NUEVO
                res.json({success: true, response: {token,nuevoUsuario}, error: null}) //RESPONDE CON EL TOKEN Y EL NUEVO USUARIO
            }
        
        }catch(error){
            res.json({success: false, response: null, error: error}) //CAPTURA EL ERROR
        }

        
    },
    accederACuenta: async(req, res)=>{
        const { userName, password } = req.body
        console.log(req.body)
        try {
            const usuarioExiste = await Persona.findOne({userName})
            if (!usuarioExiste){
                res.json({success: true, error:"El usuario y/o contraseña incorrectos"})
            }else{
                let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                if (contraseñaCoincide) {
                    const token = jwt.sign({...usuarioExiste}, process.env.SECRET_KEY)
                    res.json({success:true, response:{token,userName} ,error:null})
                }else{
                    res.json({success: true, error:"El usuario y/o contraseña incorrectos"})
                }
            }

        }catch(error){
            console.log(error);
            res.json({success: false, response: null, error: error})
        }
    }


}

module.exports = authControllers;