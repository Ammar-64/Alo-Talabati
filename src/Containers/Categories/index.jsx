import React from 'react';
import CategoriesComponent from '../../Components/Categories'
const BASE_URL = 'https://firestore.googleapis.com/v1'
class Categories extends React.Component {
    state = {
      categories: null,
      }

    componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const url = `${BASE_URL}/projects/alo-talabati/databases/(default)/documents/Categories/`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ categories: json.documents });
  }

  render() {
    if (this.state.categories === null) {
      return (<h1>Loading ...</h1>);
    }
    return (
      <CategoriesComponent
        categories={this.state.categories}
      />
    )
  }
}

export default Categories;