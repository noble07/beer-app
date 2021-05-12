import {  useEffect, useState } from "react"
import getFilteredBeers from "services/getFilteredBeers"

const useFilterBeer = ({beers}) => {
  
  const [filterValue, setFilterValue] = useState('')
  const [filterdBeers, setFilterdBeers] = useState([])
  
  useEffect(() => {
    setFilterdBeers(getFilteredBeers({filterValue, beers}))
  }, [filterValue, beers])
  
  return {setFilterValue, filterdBeers}
}


export default useFilterBeer
