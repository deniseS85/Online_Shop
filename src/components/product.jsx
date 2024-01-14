import React, { Component } from 'react';

class Product extends Component {

    render() { 
        const { onAdd, image, title, description} = this.props;
        
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img src={'./assets/img/' + image} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={onAdd} className="btn btn-primary">Zum Warenkorb</button>
                </div>
            </div>);
    }
}
 
export default Product;