import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import MenuApp from 'components/MenuApp'
import Home from 'pages/Home';
import Calculadora from 'pages/Calculadora';



function App() {

  return (
    <Router>
      <MenuApp />
      <Container style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calculadora" component={Calculadora} />
          </Switch>
          
      </Container>
    </Router>
  );
}

export default App;
