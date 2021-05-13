import { useState } from 'react';
import { Loader, Pagination, Segment } from 'semantic-ui-react';

import FilterForm from 'components/FilterForm';
import CustomTable from 'components/CustomTable'
import useBeers from 'hooks/useBeers';
import useFilterBeer from 'hooks/useFilterBeer';

const Home = () => {

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
    <>
      <FilterForm handleInputchange={handleInputchange} />
      <Segment basic textAlign='center'>
        {
          isLoading 
          ? <Loader active inline='centered' />
          : <CustomTable tableData={filterdBeers} />
        }
        <Pagination style={{marginTop: 25}} defaultActivePage={1} totalPages={10} onPageChange={handlePageChange} />
      </Segment>
    </>
  )
}

export default Home
