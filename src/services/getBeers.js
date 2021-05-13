import { API_URL } from "./settings"

const fromResponseToBeers = beers => {
  if(Array.isArray(beers)){
    const respBerrs = beers.map(beer => {
      const {id, name, description, tagline, first_brewed} = beer

      return {id, name, description, tagline, first_brewed}
    })

    return respBerrs
  }
}


const getBeers = ({page}) => {
  return fetch(`${API_URL}/beers?per_page=9&page=${page}`)
  .then(resp => resp.json())
  .then(fromResponseToBeers)
}

export default getBeers
