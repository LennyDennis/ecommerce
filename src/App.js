import './App.css'
import Product from './components/product/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav from './components/navigation/SideNav';

function App() {
  return (
    <>
      <Router>
        <SideNav />
        <div style={{ marginLeft: '250px' }}>
          <Routes>
            <Route path='/' element={<Product />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;


