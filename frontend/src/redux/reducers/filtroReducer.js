
const initialState = {
    productos:[],
    usuario:{userName:''},
    auxiliar:[]
}

const filtroReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':
            return {
                ...state,
                productos: action.payload,
                auxiliar: action.payload,
            }
            
        case 'delete':
            return {
                ...state,
                productos: action.payload
            }

        case 'usuario':
            return {
                ...state,
                usuario: action.payload
            }
        case 'cargarProducto':
            let productos = [...state.productos]
            productos.push(action.payload)
            return{
                ...state,
                productos,
                auxiliar: [...productos]
            }

        case 'filtro':
            const filtrado = action.payload.productos.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase())))

            return {
                ...state,
                productos: filtrado
            }
        default:
            return state
    }


}
export default filtroReducer