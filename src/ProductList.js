import React from 'react';
import Product from './Product';
import Total from './Total';
import ProductForm from './ProductForm';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            total : 0,
            productList: [
                {name: "Android", price: 121},
                {name: "Apple", price: 123},
                {name: "Nokia", price: 65},
            ]
        };
        this.calculateTotal = this.calculateTotal.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    calculateTotal(price){
        this.setState({total: this.state.total + price});
    }

    showProduct(name){
        alert("You selected " + name);
    }

    createProduct(product){
        this.setState({
            productList: this.state.productList.concat(product)
        });
    }

    render(){
        let products = this.state.productList.map(product=>
            (
            <Product name={product.name} price={product.price}
            handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
            )
        );

        return(
            <div>
                <ProductForm handleCreate={this.createProduct}/>
                {products}
                <Total total={this.state.total}/>
            </div>
        );
    }
}

export default ProductList;