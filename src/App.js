import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Book from './pages/Book'
import Login from './pages/Login'
import MyBooks from './pages/MyBooks'
import Search from './pages/Search'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/search' exact component={Search} />
        <Route path='/books/:id' exact component={Book} />
        <Route path='/my-books' exact component={MyBooks} />
      </Switch>
    )
  }
}

export default App