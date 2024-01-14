import React, { Component } from 'react';
import Product from './components/product';
import Navbar from './components/navbar';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = { 
        items: []
     } 

    addItem = (name, price) => {
        let currentItems = this.state.items;
        let isExistingItems = this.state.items.find(item => item.name === name);

        if (isExistingItems) {
            isExistingItems.amount++;
        } else {
            currentItems.push({
                amount: 1, 
                name, 
                price
            });
        }
        this.setState({items: currentItems});
    }

    render() { 
        const products = [
            {name: 'Tomaten', price: 2.99, image: 'tomato.jpg', description: 'Füge Tomaten in deinem Warenkorb hinzu'},
            {name: 'Gurken', price: 1.99, image: 'cucumber.jpg', description: 'Füge Gurken in deinem Warenkorb hinzu'},
            {name: 'Paprika', price: 3.99, image: 'paprika.jpg', description: 'Füge Paprika in deinem Warenkorb hinzu'},
            {name: 'Zucchini', price: 3.59, image: 'zucchini.jpg', description: 'Füge Zucchini in deinem Warenkorb hinzu'},
            {name: 'Auberginen', price: 3.50, image: 'eggplant.jpg', description: 'Füge Auberginen in deinem Warenkorb hinzu'},
        ]
        return (
            <React.Fragment>
                <Navbar/>
                <div className='main-container'>
                    <div className='product-container'>
                        {products.map(product => (
                            <Product key={product.name}
                            onAdd={() => this.addItem(product.name, product.price)}
                            image={product.image}
                            title={product.name}
                            description={product.description}
                            />
                        ))}
                    </div>
                    <ShoppingCart items={this.state.items}/>
                </div>
            </React.Fragment>);
    }
}
 
export default App;
