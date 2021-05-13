import { Button, Form, Grid, Input, Segment } from "semantic-ui-react"

const Calculadora = () => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 500 }}>
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
        <Segment color="black" raised>
          El resultado de la operación es: ...
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default Calculadora
