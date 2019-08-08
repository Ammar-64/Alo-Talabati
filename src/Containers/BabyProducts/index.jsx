import React from 'react';
import BabyProductsComponent from '../../Components/BabyProducts'
const BASE_URL = 'https://firestore.googleapis.com/v1'
class BabyProducts extends React.Component {
    state = {
        products: null,
      }

    componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const url = `${BASE_URL}/projects/alo-talabati/databases/(default)/documents/BabyProducts/`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ products: json.documents });
  }

  render() {
    if (this.state.products === null) {
      return (<h1>Loading ...</h1>);
    }
    return (
      <BabyProductsComponent
          products={this.state.products}
      />
    )
  }
}

export default BabyProducts;