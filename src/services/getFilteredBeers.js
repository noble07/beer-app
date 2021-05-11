

const getFilteredBeers = ({filterValue, setBeers}) => {

  setBeers(preBeers => 
    preBeers.filter(beer => {
      if (beer.name.includes(filterValue)) return beer
      if (beer.tagline.includes(filterValue)) return beer
      if (beer.description.includes(filterValue)) return beer
      return null
    })
  )
  
}

export default getFilteredBeers