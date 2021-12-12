import React from 'react'
import Header from '../components/Header'

class Home extends React.Component {
    render() { 
        return (
        <div className="container">
            <Header/>
            <main className="main-home">
                <h1>Playground backend</h1>
            </main>
        </div>);
    }
}
 
export default Home;