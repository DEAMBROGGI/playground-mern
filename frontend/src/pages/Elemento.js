import React from 'react'
// import axios from 'axios'
import Header from '../components/Header'
import {connect} from 'react-redux'

class Elemento extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        
    }

    state = {elemento:{name: '-'}}
    endpoint = this.props.params.endpoint
    id = this.props.params.id

    componentDidMount() {
        this.setState({elemento:this.props.productos.find(p => p._id === this.id)})
    }

    render() { 
        return (
        <div className="element">
            <Header/>
            <h1>{this.state.elemento.name}</h1>
            {
                (this.state.elemento.edad || this.state.elemento.precio) && <h3>{this.state.elemento.edad ? `Edad: ${this.state.elemento.edad}` : `Precio: $ ${this.state.elemento.precio}`} </h3>
            }
            {this.state.elemento.img && <> 
                <div style={{backgroundImage: `url('${this.state.elemento.img}')`}} className="imagen"></div>
                <p>{this.state.elemento.description}</p>
            </> }
            

        </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        productos: state.filtroReducer.productos
    }
}
 
export default connect(mapStateToProps)(Elemento);