import React from 'react';
import ProductsComponent from '../../Components/Products'

class Product extends React.Component {

    componentDidMount() {
      this.props.changeCollection(this.props.type);

  }

  render() {
    if (this.props.products === null) {
      return (<h1>Loading ...</h1>);
    }
    return (
      <ProductsComponent
          products={this.props.products}
          addToCart={this.props.addToCart}
          cart={this.props.cart}
      />
    )
  }
}

export default Product;