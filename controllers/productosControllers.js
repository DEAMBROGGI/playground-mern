
const Producto = require('../models/Producto')

const productosControllers = {
    obtenerProductos: async(req,res)=>{
        let productos
        let error = null
        try{
           productos = await Producto.find()
            
        }catch(error){
            error = error
            console.error(error)
        }      

        res.json({
            respuesta: error ? 'ERROR' : productos, 
            success: error ? false : true,
            error: error
        })
        
    },
    obtenerUnProducto: async(req,res)=>{
        let producto
        const id = req.params.id        
        try{
            producto = await Producto.findOne({_id:id})
        }catch(error){
            console.log(error)
        }
        res.json({respuesta:producto,success:true})

    },
    cargarUnProducto: (req,res)=>{
        const {name, precio, description, stock} = req.body
        if (req.user) {
            new Producto({name, precio, description, stock}).save()
            .then((respuesta) => res.json({respuesta}))
        }else{
            res.json({success: true, error:'El usuario no es autentico, prueba loguearte de nuevo.'})
        }
        

        // res.json({respuesta: productos})
    },
    borrarUnProducto: async(req,res)=>{
        const id = req.params.id
        let productos
        console.log(req.user)
        if (req.user) {
            try{
                await Producto.findOneAndDelete({_id:id})
                productos = await Producto.find()

            }catch(error){
                console.log(error)
            }
            res.json({respuesta: productos,success:true})
        }else{
            res.json({success: true, error:'El usuario no es autentico'})
        }

    },
    modificarProducto: async(req,res)=>{
        let id = req.params.id
        let producto = req.body
        let actualizado
        console.log(producto)
        try{
            actualizado = await Producto.findOneAndUpdate({_id:id},producto,{new:true})
            console.log(actualizado)
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }
}


module.exports = productosControllers;