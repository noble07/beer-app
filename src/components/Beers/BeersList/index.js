import { Card, Loader } from "semantic-ui-react"
import BeerCard from 'components/Beers/BeerCard'
import useBeers from "hooks/useBeers"

const BeersList = ({page}) => {

  const {beers, isLoading} = useBeers({page})

  return (
    <Card.Group itemsPerRow={3} style={{marginTop: 25}} >
          {
            isLoading 
            ? <Loader active inline='centered' />
            : beers.map(beer => 
                <BeerCard
                  key={beer.id}
                  image={beer.image_url}
                  name={beer.name}
                  firstBrewed={beer.first_brewed}
                  tagline={beer.tagline}
                  description={beer.description}
                />
              )
          }
    </Card.Group>
  )
}

export default BeersList
