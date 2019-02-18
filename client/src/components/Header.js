import React, { Component } from 'react';
import logo from '../images/logo.jpg'

class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <header className="App-header">
                <img src={logo} className="Inventory-logo" alt="logo" />
                <h3>{title}</h3>
            </header>
          )
    }
}

export default Header;
