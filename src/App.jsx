import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
// import './App.css';
import Home from './views/Home'
import Search from './views/Search'
import Article from './views/Article'


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route
            path='/'
            component={Home}
            exact
          />
          <Route
            path='/articles'
            component={Search}
            exact
          />
          {/* <Route
            path='/post/:id'
            component={PostDetail}
            exact
          /> */}
          <Route
            path='/articles/:articleId'
            component={Article}
            exact
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
