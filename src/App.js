import React from 'react';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

class App extends React.Component {
  state = {
    searchValue: '',
  };

  changeSearchValue = value => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.changeSearchValue} />
        <ImageGallery searchValue={this.state.searchValue} />
      </Container>
    );
  }
}

export default App;
