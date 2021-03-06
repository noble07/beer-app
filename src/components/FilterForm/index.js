import { Form, Segment } from "semantic-ui-react"

const FilterForm = ({ handleInputchange }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Segment>
        <Form.Input placeholder="Filtrat por..." name="filter" onChange={handleInputchange} />
      </Segment>
    </Form>
  )
}

export default FilterForm
