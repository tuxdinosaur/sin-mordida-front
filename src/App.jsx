import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
// import './App.css';
import Home from './views/Home'
import AllArticles from './views/AllArticles'
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
            component={AllArticles}
            exact
          />
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
