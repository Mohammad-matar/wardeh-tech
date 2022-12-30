import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Login from './Pages/Login';
import Category from './Pages/Categories';
import ProductDetails from './Pages/ProductDetails';
import Layout from './Components/Layout';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />}></Route>

            <Route
              path={"/products/:id"}
              element={
                <ProductDetails />
              }
            ></Route>

            <Route path={"categories/:category"} element={<Category />}></Route>


            {/* <Route path={"/*"} element={<NotFound />}></Route> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
