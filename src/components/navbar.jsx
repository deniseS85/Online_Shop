import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (<nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Online Shop</a>
                    </div>
                </nav>);
    }
}
 
export default Navbar;