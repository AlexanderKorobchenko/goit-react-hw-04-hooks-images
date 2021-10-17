import { useState } from 'react';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = value => {
    setSearchValue(value);
  };

  return (
    <Container>
      <Searchbar onSubmit={changeSearchValue} />
      <ImageGallery searchValue={searchValue} />
    </Container>
  );
}

export default App;
