import { Card, Image } from "semantic-ui-react"
import './index.css'

const BeerCard = ({image, name, firstBrewed, tagline, description}) => {
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>First Brewed in {firstBrewed}</Card.Meta>
      <Card.Description>
        {description.length > 100 ? description.substring(0, 100)+'...' : description }
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {tagline}
      </Card.Content>
    </Card>
  )
}

export default BeerCard
