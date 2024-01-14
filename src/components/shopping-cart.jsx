import React, { Component } from 'react';

class ShoppingCart extends Component {
    state = { } 

    calculateTotal = () => {
        const total = this.props.items.reduce((acc, item) => {
            return acc + (item.amount * item.price);
        }, 0);

        return total.toFixed(2);
    }

    render() { 
        return (
            <div className='shopping-cart'>
                <div className='sticky'>
                    <h2>Warenkorb</h2>
                    {this.props.items.map(item =>  (
                        <div className='single-product' key={item.name}>
                            <div>{item.amount}</div> 
                            <div>{item.name}</div> 
                            <div>{item.price} €</div>
                        </div>
                    ))}
                    <div className='total'>
                        <strong>Total</strong>
                        <strong>{this.calculateTotal()} €</strong>
                    </div>
                </div>
            </div>
            );
    }
}
 
export default ShoppingCart;