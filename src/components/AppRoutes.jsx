import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
import Page404 from "./routes/Page404";
import Watches from "./routes/Watches";
import SignUp from "./routes/SignUp";
import CreatingAccount from "./routes/CreatingAccount";
import LogIn from "./routes/LogIn";
import Test from "./routes/Test";
import Bands from "./routes/Bands";
import Cufflinks from "./routes/Cufflinks";
import { Product } from "./routes/Product";
import { getApi } from "../services/apiService";
import Account from "./routes/Account";
import Cart from "./routes/Cart";
import Favorites from "./routes/Favorites";
import AdminLogIn from "./routes/Admin/AdminLogIn";

const AppRoutes = () => {

  const [cufflinks, setCufflinks] = useState([]);
  const [bands, setBands] = useState([]);
  const [watches, setWatches] = useState([]);

  const getCufflinks = async () => {
    setCufflinks(await getApi("/cufflinks"));
  };
  
  const getBands = async () => {
    setBands(await getApi("/bands"));
  };
  
  const getWatches = async () => {
    setWatches(await getApi("/watches"));
  };

  useEffect(() => {
    getCufflinks();
    getWatches();
    getBands();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/adminLogin" element={<AdminLogIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/watches" element={<Watches  watches={watches} />} />
          <Route path="/bands" element={<Bands bands={bands} />} />
          <Route
            path="/cufflinks"
            element={<Cufflinks cufflinks={cufflinks} />}
          />
          <Route
            path="/product/:productId"
            element={
              <Product products={[...watches, ...bands, ...cufflinks]} />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/account" element={<Account />} />
          <Route path="/creatingAccount" element={<CreatingAccount />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
