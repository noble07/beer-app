import { useEffect, useState } from "react"
import getBeers from "services/getBeers"


const useBeers = ({ page = 1 } = {}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [beers, setBeers] = useState([])

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
