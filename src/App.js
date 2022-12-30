import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Login from './Pages/Login';
import Category from './Pages/Categories';
import ProductDetails from './Pages/ProductDetails';
import Layout from './Components/Layout';
import { AuthProvider } from './Components/auth';
import { RequireAuth } from './Components/RequireAuth';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/login"} element={<Login />}></Route>
            <Route path={"/"} element={<Layout />}>
              <Route index element={<RequireAuth>
                <Home />
              </RequireAuth>}></Route>

              <Route
                path={"/products/:id"}
                element={<RequireAuth><ProductDetails /></RequireAuth>
                }
              ></Route>

              <Route path={"categories/:category"} element={<RequireAuth><Category /></RequireAuth>}>
              </Route>


              {/* <Route path={"/*"} element={<NotFound />}></Route> */}
            </Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </>
  );
}

export default App;
