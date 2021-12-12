import React from 'react';
import Header from "../components/Header";
import Inputs from '../components/Inputs'
import {connect} from 'react-redux';
import filtroActions from '../redux/actions/filtroActions'

class Formulario extends React.Component {


    handleSubmit = async (name, precio)=>{
        this.props.cargarProducto(name,precio)

    }

    render() { 
        return (
        <div className="container">
            <Header/>
            <h1 style={{width:'100%',textAlign:'center'}}>Cargar Productos</h1>
            <main className="main-formulario">
                <Inputs handleSubmit={this.handleSubmit}/>
            </main>
        </div>);
    }
}
 
 const mapStateToProps = (state) =>{
     return {
        usuario: state.filtroReducer.usuario,
     }
 }
 const mapDispatchToProps = {
    cargarProducto: filtroActions.cargarProducto
 }

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);