import React from 'react';
import CategoriesComponent from '../../Components/Categories';

class CategoriesFetch extends React.Component {
  state = {
    Categories: null,
  }

  componentDidMount() {
    this.fetchCategoriesFetch();
  }

  fetchCategories = async () => {
    const url = 'https://firestore.googleapis.com/v1/projects/alo-talabati/databases/(default)/documents/Categories/'
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ Categories: json.documents });
  }

  render() {
    if (this.state.Categories === null) {
      return (<h1>Loading ...</h1>);
    }
    return (
      <CategoriesComponent
        Categories={this.state.Categories}
      />
    )
  }
}

export default CategoriesFetch;