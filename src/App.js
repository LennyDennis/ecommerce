import './App.css'
// import { useState, useEffect } from 'react'
// import Product from './components/product/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/navigation/SideNav';

function App() {
  // const [products, setProducts] = useState([])
  // const baseUrl = 'http://localhost:5000/products'

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const productsFromServer = await fetchProducts()
  //     setProducts(productsFromServer)
  //   }

  //   getProducts()
  // }, [])

  // const fetchProducts = async () => {
  //   const res = await fetch(baseUrl)
  //   const data = await res.json()
  //   return data;
  // }


  return (
    // <div className="container-fluid test">
    //   <Product productList={products} />
    // </div>

    <>
      <Router>
        <SideNav />
        <Routes>
          <Route path='/' exact />
          {/* <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/' element={<Home/>} />
          <Route path='/products' component={Products} /> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;


