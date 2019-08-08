import React from 'react';
import ProductsComponent from '../../Components/Products'
const BASE_URL = 'https://firestore.googleapis.com/v1'
class Product extends React.Component {
    state = {
        products: null,
      }

    componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const url = `${BASE_URL}/projects/alo-talabati/databases/(default)/documents/${this.props.type}/`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ products: json.documents });
  }

  render() {
    if (this.state.products === null) {
      return (<h1>Loading ...</h1>);
    }
    return (
      <ProductsComponent
          products={this.state.products}
      />
    )
  }
}

export default Product;