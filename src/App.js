import { Provider } from 'react-redux';
import {store} from "./redux/configure-store";
import AllBooks from "./pages/main_page/containers/allBooks";
import AppHeader from "./pages/main_page/containers/header";
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Wishlist from "./pages/wishlist/Wishlist";
import Basket from "./pages/basket/containers/basket";


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
          <AppHeader/>
            <Container>

              <Row>


                  <Col >

                          <Switch>
                            <Route exact path='/wishlist'><Wishlist/></Route>
                            <Route exact path='/basket'><Basket/></Route>
                            <Route path='*' ><AllBooks/></Route>
                          </Switch>


                      </Col>
              </Row>
            </Container>
          </BrowserRouter>



      </Provider>
  );
}

export default App;
