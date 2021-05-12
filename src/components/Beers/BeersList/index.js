import { Card} from "semantic-ui-react"
import BeerCard from 'components/Beers/BeerCard'

const BeersList = ({beers}) => {


  return (
    <Card.Group itemsPerRow={3} style={{marginTop: 25}} >
          {
            beers.map(beer => 
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
