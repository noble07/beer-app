import { useContext, useEffect, useState } from "react"
import getFilteredBeers from "services/getFilteredBeers"
import BeerContext from 'context/BeerContext'

const useFilterBeer = () => {
  
  const [filterValue, setFilterValue] = useState('')
  const {setBeers} = useContext(BeerContext)
  
  useEffect(() => {
    getFilteredBeers({filterValue, setBeers})
  }, [filterValue, setBeers])
  
  return {setFilterValue}
}


export default useFilterBeer
