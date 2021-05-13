import { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Menu } from "semantic-ui-react"

const MenuApp = () => {

  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
  }
  

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item
          as={Link}
          to="/"
          header
        >
          Beer App
        </Menu.Item>
        <Menu.Item
          name='home'
          as={Link}
          to="/"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >

          Home
        </Menu.Item>
        <Menu.Item
          name='calculadora'
          as={Link}
          to="/calculadora"
          active={activeItem === 'calculadora'}
          onClick={handleItemClick}
        >
          Calculadora
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default MenuApp