import React, { lazy } from 'react'
import { renderPage } from '../utils/renderPage'
import { Route } from 'react-router-dom'

// Pages
const HomePage = lazy(() => import('../pages'))
const DetailsPage = lazy(() => import('../pages/details'))

const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/:title",
    component: DetailsPage
  }
]


export const Routes = () => routes.map(r => (
  <Route key={r.path} exact path={r.path} render={() => renderPage(r.component)} />
))