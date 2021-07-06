import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar, Sidebar} from './components'
import './app.scss'

import Home from './pages/Home/Home'
import Product from './pages/Product/Product'

function App() {
  return (
    <Router>
      <Navbar />
        <div className="App container">
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={Product} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
