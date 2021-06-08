import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { NotFound } from './pages/NotFound'
import { LoadingComponent } from './components/LoadingComponent'
const Drawing = React.lazy(() => import('./pages/Drawing'))
const Home = React.lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<LoadingComponent />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/app" exact component={Drawing} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}
