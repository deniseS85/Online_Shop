import React, { Component } from 'react';
import Product from './components/product';
import Navbar from './components/navbar';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {  } 
    render() { 
        return (<React.Fragment>
                    <Navbar/>
                    <div className='main-container'>
                        <div className='product-container'>
                            <Product image="tomato.jpg" title="Tomaten" description="Füge Tomaten in deinem Warenkorb hinzu"/>
                            <Product image="cucumber.jpg" title="Gurken" description="Füge Gurken in deinem Warenkorb hinzu"/>
                            <Product image="paprika.jpg" title="Paprika" description="Füge Paprika in deinem Warenkorb hinzu"/>
                            <Product image="zucchini.jpg" title="Zucchini" description="Füge Zucchini in deinem Warenkorb hinzu"/>
                            <Product image="eggplant.jpg" title="Auberginen" description="Füge Aubergine in deinem Warenkorb hinzu"/>
                        </div>
                        <ShoppingCart/>
                    </div>
                    
                </React.Fragment>);
    }
}
 
export default App;
