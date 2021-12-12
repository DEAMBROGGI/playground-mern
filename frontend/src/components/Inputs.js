import {useRef} from 'react'

function Inputs(props) {
    const inputNombre = useRef()
    const inputPrecio = useRef()
    const {handleSubmit, data} = props;

    const handleSubmitInputs = (e)=>{
        e.preventDefault()
        handleSubmit(inputNombre.current.value, inputPrecio.current.value)
        inputNombre.current.value = ''
        inputPrecio.current.value = ''
    }


    return ( 
    
    <form onSubmit={handleSubmitInputs}>
                    <label style={{display: 'flex',flexDirection: 'column'}}>{!data?.first ? 'Nombre del producto:' : data.first}
                        <input className='input' type="text" ref={inputNombre} name="name"/>
                    </label>
                    <label style={{display: 'flex',flexDirection: 'column'}}>{!data?.second ? "Precio del producto:" : data.second}
                        <input className='input' type="text" ref={inputPrecio} name="precio"/>
                    </label>
                    <input type="submit" value="Enviar"/>
                </form>);
}

export default Inputs;