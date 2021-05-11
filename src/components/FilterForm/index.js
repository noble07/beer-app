import useFilterBeer from "hooks/useFilterBeer"
import { useState } from "react"
import { Form, Segment } from "semantic-ui-react"

const FilterForm = () => {

  const [filterInput, setFilterInput] = useState('')
  const {setFilterValue} = useFilterBeer()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFilterValue(filterInput)
  }

  const handleInputchange = (e, {value}) => {
    setFilterInput(value)
  }
  

  return (
    <Form onSubmit={handleSubmit}>
      <Segment>
        <Form.Input placeholder="Filtrat por..." name="filter" onChange={handleInputchange} />
        <Form.Button content="Filtrar"  />
      </Segment>
    </Form>
  )
}

export default FilterForm
