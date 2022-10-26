import './App.css'
import Product from './components/product/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/navigation/SideNav';
import NavBar from './components/navigation/NavBar';

function App() {



  return (
    // <div className="container-fluid test">
    //   <Product productList={products} />
    // </div>

    <>
      <Router>
        <SideNav />
        <div style={{ marginLeft: '250px' }}>
          <Product />
          <Routes>
            <Route path='/' exact />
            <Route path='/' exact component={Product} />
            {/* <Route path='/reports' component={Reports} />
          <Route path='/' element={<Home />} />
          <Route path='/products' component={Products} /> */}
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;


