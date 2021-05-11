import { useContext, useEffect, useState } from "react"
import getBeers from "services/getBeers"
import BeerContext from 'context/BeerContext'

const useBeers = ({ page = 1 } = {}) => {

  const [isLoading, setIsLoading] = useState(false)
  const {beers, setBeers} = useContext(BeerContext)

  useEffect(() => {
    setIsLoading(true)
    getBeers({page})
      .then(beers => {
        setBeers(beers)
        setIsLoading(false)
      })
  }, [page, setBeers])

  return {beers, isLoading}

}

export default useBeers
