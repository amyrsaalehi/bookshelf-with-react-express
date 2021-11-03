// Basic imports from React
import React, { Suspense } from 'react'
// Routes
import { BrowserRouter as Router, Switch } from 'react-router-dom'
// Main and Basic Styles
import './styles/App.css'
// Import from bootstrap
import { Spinner } from 'react-bootstrap'
// Route renderer
import { Routes } from './routes/Routes'



const App = () => (
  <Suspense fallback={<Spinner />}>
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  </Suspense>
)

export default App
