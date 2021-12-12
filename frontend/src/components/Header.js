import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Header(props) {
    return ( 
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/lista">Listas</Link>
            <Link to="/formulario">Formulario</Link>
            <Link to="/registro">Registro</Link>
            <Link to="/inicioSesion">Inicio sesion</Link>
        </nav>
        {props.usuario.userName !== '' ? <h1>Bienvenido {props.usuario.userName}</h1> : <h1>No estas registrado</h1>}
    </header> );
}
const mapStateToProps = (state) =>{
    return {
        usuario: state.authReducer.usuario
    }
} 
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);