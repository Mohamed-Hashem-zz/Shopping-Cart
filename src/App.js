import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

import Navbar from './Components/Navbar/Navbar'
import Category from './Pages/Category/Category'
import Products from './Pages/Products/Products';
import Cart from './Pages/CartItems/Cart';
import Product from './Pages/Product/Product'

class App extends Component {

  render() {

    return (

      <div>

        <Navbar />

        <Switch>

          <Route exact path="/" component={Category} />

          <Route exact path="/products" component={Products} />

          <Route path="/products/:id" component={Product} />

          <Route path="/carts" component={Cart} />

          <Redirect from="*" to="/" />

        </Switch>

      </div >
    )
  }
}

export default App;