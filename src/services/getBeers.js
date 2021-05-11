import { API_URL } from "./settings"

const getBeers = ({page}) => {
  return fetch(`${API_URL}/beers?per_page=9&page=${page}`)
  .then(resp => resp.json())
  .then(beers => beers)
}

export default getBeers
