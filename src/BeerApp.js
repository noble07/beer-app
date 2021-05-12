import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import FilterForm from 'components/FilterForm';
import BeersList from './components/Beers/BeersList'
import { Container, Header, Loader, Pagination, Segment } from 'semantic-ui-react';
import useBeers from 'hooks/useBeers';
import useFilterBeer from 'hooks/useFilterBeer';

function App() {

  const [page, setPage] = useState(1)
  const {beers, isLoading} = useBeers({page})
  const {setFilterValue, filterdBeers} = useFilterBeer({beers})

  const handlePageChange = (e, {activePage}) => {
    setPage(activePage)
  }

  const handleInputchange = (e, {value}) => {
    setFilterValue(value)
  }

  return (
    
    <Container>
      <Header as="h1" content="Beer App" textAlign="center" style={{ marginTop: '2rem' }} />
        <FilterForm handleInputchange={handleInputchange} />
        <Segment basic textAlign='center'>
          {
            isLoading 
            ? <Loader active inline='centered' />
            : <BeersList beers={filterdBeers} setPage={setPage} page={page} />
          }
          <Pagination style={{marginTop: 25}} defaultActivePage={1} totalPages={10} onPageChange={handlePageChange} />
        </Segment>
    </Container>
  );
}

export default App;
