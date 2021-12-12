
const Filtro = (props)=>{

    const {productos,filtrar} = props;

    return (
        <div className="contenedor-botones">
            <input type="text" className="input" autoComplete="off" name="filtro" onChange={(evento)=>filtrar(productos,evento.target.value)} placeholder="Filtrar"/>
        </div>
    )
}

export default Filtro