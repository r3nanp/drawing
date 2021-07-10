import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Drawing = React.lazy(() => import('../pages/Drawing'))
const Home = React.lazy(() => import('../pages/Home'))
import { NotFound } from '../pages/NotFound'
import { LoadingComponent } from '../components/LoadingComponent'

export function Routes() {
  return (
    <Router>
      <React.Suspense fallback={<LoadingComponent />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/drawing" component={Drawing} />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}
