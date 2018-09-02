import React from 'react';

class ProductForm extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(event){
        event.preventDefault();
        let product = {
            name: this.refs.name.value,
            price: parseInt(this.refs.price.value) || 0
        };

        this.props.handleCreate(product);

        this.refs.name.value = "";
        this.refs.price.value = "";
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Product Name" ref="name" />
                <input type="text" placeholder="Product Price" ref="price" />
                <br></br>
                <button onClick={this.submit}>Create Product</button>
                <hr/>
            </form>      
        );
    }
}

export default ProductForm;