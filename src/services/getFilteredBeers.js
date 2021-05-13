const getFilteredBeers = ({filterValue, beers}) => {

  const filteredBeers = beers.filter(beer => {
    if (beer.name.toLowerCase().includes(filterValue.toLowerCase())) return beer
    if (beer.description.toLowerCase().includes(filterValue.toLowerCase())) return beer
    if (beer.tagline.toLowerCase().includes(filterValue.toLowerCase())) return beer
    if (beer.first_brewed.toLowerCase().includes(filterValue.toLowerCase())) return beer
    return null
  })

  return filteredBeers
  
}

export default getFilteredBeers