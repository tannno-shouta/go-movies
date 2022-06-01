import { BrowserRouter as Router, Routes, Route, Link, useMatch} from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import Admin from './components/Admin'
import Categories from './components/Categories'
import OneMovie from './components/OneMovie'
 
export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">
            Go Watch a Movie!
          </h1>
          <hr className="mb-3" />
        </div>
 
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalog</Link>
                </li>
              </ul>
            </nav>
          </div>
 
          <div className="col-md-10">
          <Routes>
            <Route path="/Home"  element={<Home />}>
            </Route>
            <Route path="/movies/:id" element={<OneMovie />}/>
            <Route path="/movies" element={<Movies />}>
            </Route>
            <Route  path="/by-category"element={<CategoryPage />}>
            <Route
                path="/by-category/comedy"
                render={(props) => <Categories {...props} title={`Comedy`}/>}
              />
            <Route
                path="/by-category/drama"
                render={(props) => <Categories {...props} title={`Drama`}/>}
              />
            </Route>
            <Route path="/admin"  element={<Admin />}>
            </Route>
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

const CategoryPage = () => {
  let { path, url } = useMatch()
  console.log(path, url)
 
  return (
    <div>
      <h2>Categories</h2>
 
      <ul>
        <li><Link to={`${path}/comedy`}>Comedy</Link></li>
        <li><Link to={`${url}/drama`}>Drama</Link></li>
      </ul>
    </div>
  )
}
