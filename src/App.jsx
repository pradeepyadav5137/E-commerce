// Alias: Something as something
import React ,{createContext, useState}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./Header";
// import Product from "./Product";
import Home from "./Home";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import NotFound from "./NotFound";
import Products from "./Product";
import Carts from './Carts';



export const reactRouting = createContext(null)


//NESTED ROUTES
//OUTLET

// CONTEXT API

// REDUX

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
    <reactRouting.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/carts" element={<Carts/>}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      </reactRouting.Provider>
    </>
  );
}


export default App;
