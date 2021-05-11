import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import FilterForm from 'components/FilterForm';
import BeersList from './components/Beers/BeersList'
import { Container, Header, Pagination, Segment } from 'semantic-ui-react';
import { BeerContextProvider } from 'context/BeerContext';

function App() {

  const [page, setPage] = useState(1)

  const handlePageChange = (e, {activePage}) => {
    setPage(activePage)
  }
  

  return (
    
    <Container>
      <Header as="h1" content="Beer App" textAlign="center" style={{ marginTop: '2rem' }} />
      <BeerContextProvider>
        <FilterForm />
        <Segment basic textAlign='center'>
            <BeersList setPage={setPage} page={page} />
          <Pagination style={{marginTop: 25}} defaultActivePage={1} totalPages={10} onPageChange={handlePageChange} />
        </Segment>
      </BeerContextProvider>
    </Container>
  );
}

export default App;
