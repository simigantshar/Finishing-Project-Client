import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
import Page404 from "./routes/Page404";
import Watches from "./routes/Watches";
import SignUp from "./routes/SignUp";
import CreatingAccount from "./routes/CreatingAccount";
import LogIn from "./routes/LogIn";
import Bands from "./routes/Bands";
import Cufflinks from "./routes/Cufflinks";
import { Product } from "./routes/Product";
import { getApi } from "../services/apiService";
import Account from "./routes/Account";
import Cart from "./routes/Cart";
import Favorites from "./routes/Favorites";
import AdminLogIn from "./routes/Admin/AdminLogIn";
import CheckToken from "./routes/CheckToken";
import Tourbillon from "./routes/watch pages/Tourbillon";
import Automatic from "./routes/watch pages/Automatic";
import Skeleton from "./routes/watch pages/Skeleton";
import MoonPhase from "./routes/watch pages/MoonPhase";
import Chronograph from "./routes/watch pages/Chronograph";
import AdminLayout from "./routes/Admin/adminLayout/AdminLayout";
import UsersList from "./routes/Admin/UsersList";
import AdminWatches from "./routes/Admin/AdminWatches";
import AdminCufflinks from "./routes/Admin/AdminCufflinks";
import AdminBands from "./routes/Admin/AdminBands";
import AdminProduct from "./routes/Admin/AdminProduct";
import AdminAccount from "./routes/Admin/AdminAccount";
import Brands from "./routes/watch pages/Brands";
import Checkout from "./routes/Checkout";
import Brand from "./routes/watch pages/Brand";
import AuthAdminComp from "./routes/Admin/AuthAdminComp";
import Payment from "./routes/Payment";
import PaymentCompleted from "./routes/PaymentCompleted";
import Orders from "./routes/Orders";

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
      <CheckToken />
      <Routes>
        <Route path="/adminLogin" element={<AdminLogIn />} />
        <Route
          path="/admin"
          element={
            <div>
              <AdminLayout />
              <AuthAdminComp />
            </div>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/admin/watches"
            element={<AdminWatches watches={watches} />}
          />
          <Route path="/admin/bands" element={<AdminBands bands={bands} />} />
          <Route
            path="/admin/cufflinks"
            element={<AdminCufflinks cufflinks={cufflinks} />}
          />
          <Route
            path="/admin/product/:_id"
            element={
              <AdminProduct products={[...watches, ...bands, ...cufflinks]} />
            }
          />
          <Route path="/admin/account" element={<AdminAccount />} />
          <Route path="/admin/usersList" element={<UsersList />} />
          <Route path="*" element={<Page404 link={"/admin"} />} />
        </Route>
        <Route path="/" element={<Layout watches={watches} />}>
          <Route index element={<Home />} />
          {/*  */}
          <Route path="/watches" element={<Watches watches={watches} />} />
          <Route
            path="/watches/brands/:brand"
            element={<Brand watches={watches} />}
          />
          <Route
            path="/watches/tourbillons"
            element={<Tourbillon watches={watches} />}
          />
          <Route
            path="/watches/automatic"
            element={<Automatic watches={watches} />}
          />
          <Route
            path="/watches/skeleton"
            element={<Skeleton watches={watches} />}
          />
          <Route
            path="/watches/moon-phase"
            element={<MoonPhase watches={watches} />}
          />
          <Route
            path="/watches/chronographs"
            element={<Chronograph watches={watches} />}
          />
          <Route path="/watches/brands" element={<Brands />} />
          <Route path="/checkout" element={<Checkout />} />
          {/*  */}
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
          <Route path="/account" element={<Account />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentCompleted" element={<PaymentCompleted />} />
          <Route path="/orders" element={<Orders/>}/>
          <Route path="*" element={<Page404 link={"/"} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
