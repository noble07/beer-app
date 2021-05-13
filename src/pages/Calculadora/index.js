import CustomTable from "components/CustomTable"
import { Button, Form, Grid, Header, Input, Segment } from "semantic-ui-react"

const RESULT_HISTORY = [
  {
    id: 1,
    type_operation: 'Sumas',
    number_1: 2,
    number_2: 5,
    result: 7
  },
  {
    id: 2,
    type_operation: 'Restar',
    number_1: 3,
    number_2: 6,
    result: -3
  },
  {
    id: 3,
    type_operation: 'Multiplicar',
    number_1: 2,
    number_2: 2,
    result: 4
  },
  {
    id: 4,
    type_operation: 'Dividir',
    number_1: 9,
    number_2: 3,
    result: 3
  }
]

const Calculadora = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 650 }}>
        <Segment color="black" raised textAlign="left">
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Numero 1</label>
                <Input fluid placeholder="Numero 1"/>
              </Form.Field>
              <Form.Field>
                <label>Numero 2</label>
                <Input fluid placeholder="Numero 2"/>
              </Form.Field>
            </Form.Group>
            <Button.Group widths="4">
              <Button>
                Sumar
              </Button>
              <Button>
                Restar
              </Button>
              <Button>
                Multiplicar
              </Button>
              <Button>
                Dividir
              </Button>
            </Button.Group>
          </Form>
        </Segment>
        <Segment raised>
          {
            // ? TODO: Agregar historial de operaciones con <CustomTable />
          }
          <Header as="h2">Historial de Resultados</Header>
          <CustomTable tableData={RESULT_HISTORY} />
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Calculadora
