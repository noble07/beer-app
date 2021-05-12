const getFilteredBeers = ({filterValue, beers}) => {

  
  const filteredBeers = beers.filter(beer => {
    if (beer.name.includes(filterValue)) return beer
    if (beer.tagline.includes(filterValue)) return beer
    if (beer.description.includes(filterValue)) return beer
    return null
  })

  return filteredBeers
  
}

export default getFilteredBeers