import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './router'

import styled, { createGlobalStyle } from 'styled-components'

import theme from './utils/theme'

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    height: 100%;
    background-color: ${theme.colors.base};
  }
`

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      {routes.map(route => (
        <Route key={route.key} path={route.path} exact component={route.component} />
      )
      )}
    </Switch>
  </ BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));