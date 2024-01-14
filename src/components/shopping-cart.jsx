import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = { 
        items: [
            {
                amount: 1,
                name: 'Tomaten',
                price: 4.9
            },
            {
                amount: 1,
                name: 'Gurken',
                price: 2.5
            }
        ]
    } 

    render() { 
        return (<div className='shopping-cart'>
                    <h2>Warenkorb</h2>
                    {this.state.items.map(item => <div key={item.name}>{item.amount} {item.name} {item.price}</div>)}
                </div>);
    }
}
 
export default ShoppingCart;