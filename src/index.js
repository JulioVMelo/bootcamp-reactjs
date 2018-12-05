import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";

class MeuNome extends Component {
    render() {
        return <span>Júlio V. Melo</span>
    }
}

class Button extends Component {
    static defaultProps = {
        children: 'salvar',
    }
    
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string
    }

    render() {
        return <button onClick={this.props.onClick}>
            {this.props.children}
        </button>
    }
}



class App extends Component {
    handleClick() {
        alert('botao clicado')
    }
    render() {
        return (
            <Fragment>
                <h1>Hello, <MeuNome /> </h1>
                <Button onClick={this.handleClick}>Enviar children</Button>
                <Button onClick={() => { alert('button 1') } }/>
            </Fragment>
        )
    }
}

render(<App />, document.getElementById('app'));