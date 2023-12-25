import React, { useEffect } from "react";
import "./App.css";
import LoginSignUp from "./components/user/LoginSignUp";
import UserOptions from "./components/layout/Header/UserOption";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPanel from "./components/admin/AdminPanel";
import Home from "./components/layout/Home/Home";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UsersList from "./components/admin/UserList";
import OrderList from "./components/admin/OrderList";
import Inventory from "./components/admin/Inventory";
import NewBrand from "./components/admin/NewBrand";
import NewModel from "./components/admin/NewModel";
import NewVariant from "./components/admin/NewVariant";
import UpdateBrand from "./components/admin/UpdateBrand";
import UpdateModel from "./components/admin/UpdateModel";
import UpdateUser from "./components/admin/UpdateUser";
import BrandList from "./components/brands/BrandList";
import ModelsOfParticularBrand from "./components/Models/ModelsOfParticularBrand";
import Model from "./components/Models/Model";
import Round1 from "./components/DeviceEvaluation/Round1";
import Round2 from "./components/DeviceEvaluation/Round2";
import Round3 from "./components/DeviceEvaluation/Round3";
import Round4 from "./components/DeviceEvaluation/Round4";
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";
import ChooseVariant from "./components/DeviceEvaluation/ChooseVariant";
import Round2sub1 from "./components/DeviceEvaluation/Round2sub1";
import Round2sub2 from "./components/DeviceEvaluation/Round2sub2";
import Round2sub3 from "./components/DeviceEvaluation/Round2sub3";
import Round2sub4 from "./components/DeviceEvaluation/Round2sub4";
import Checkout from "./components/orders/Checkout";
import Shipping from "./components/orders/Shipping";
import ProcessOrder from "./components/admin/ProcessOrder";
import MyOrders from "./components/orders/MyOrders";
import OrderDetails from "./components/orders/OrderDetails";
import UpdateCut from "./components/admin/UpdateCut";
import SearchPage from "./components/layout/Searchpage";
import ScrollToTop from "./components/layout/ScrollToTop";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Router>
        {isAuthenticated && <UserOptions user={user} />}
        <LoginSignUp />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/brands" element={<BrandList />} />
          <Route
            exact
            path="/brand/:id"
            element={<ModelsOfParticularBrand />}
          />
          <Route exact path="/model/:id" element={<Model />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />
          <Route
            exact
            path="/model/:id/choosevariant"
            element={<ChooseVariant />}
          />
          <Route exact path="/model/:id/round1" element={<Round1 />} />
          <Route exact path="/model/:id/round2" element={<Round2 />} />
          <Route exact path="/model/:id/round3" element={<Round3 />} />
          <Route exact path="/model/:id/round4" element={<Round4 />} />
          <Route exact path="/model/:id/round2-sub1" element={<Round2sub1 />} />
          <Route exact path="/model/:id/round2-sub2" element={<Round2sub2 />} />
          <Route exact path="/model/:id/round2-sub3" element={<Round2sub3 />} />
          <Route exact path="/model/:id/round2-sub4" element={<Round2sub4 />} />
          <Route exact path="/model/:id/shipping" element={<ProtectedRoute />}>
            <Route exact path="/model/:id/shipping" element={<Shipping />} />
          </Route>
          <Route exact path="/order/:id" element={<ProtectedRoute />}>
            <Route exact path="/order/:id" element={<OrderDetails />} />
          </Route>
          <Route exact path="/model/:id/checkout" element={<ProtectedRoute />}>
            <Route exact path="/model/:id/checkout" element={<Checkout />} />
          </Route>
          <Route
            exact
            path="/admin/dashboard"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/dashboard" element={<AdminPanel />} />
          </Route>
          <Route
            exact
            path="/admin/users"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/users" element={<UsersList />} />
          </Route>
          <Route
            exact
            path="/admin/orders"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/orders" element={<OrderList />} />
          </Route>
          <Route
            exact
            path="/admin/inventory"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/inventory" element={<Inventory />} />
          </Route>
          <Route
            exact
            path="/admin/brand/new"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/brand/new" element={<NewBrand />} />
          </Route>
          <Route
            exact
            path="/admin/model/new"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/model/new" element={<NewModel />} />
          </Route>
          <Route
            exact
            path="/admin/variant/new"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/variant/new" element={<NewVariant />} />
          </Route>
          <Route
            exact
            path="/admin/model/:id"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/model/:id" element={<UpdateModel />} />
          </Route>
          <Route
            exact
            path="/admin/brand/:id"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/brand/:id" element={<UpdateBrand />} />
          </Route>
          <Route
            exact
            path="/admin/user/:id"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/user/:id" element={<UpdateUser />} />
          </Route>
          <Route
            exact
            path="/admin/order/:id"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
          </Route>
          <Route
            exact
            path="/cut/:id"
            isAdmin={true}
            element={<ProtectedRoute />}
          >
            <Route exact path="/cut/:id" element={<UpdateCut />} />
          </Route>
          <Route exact path="/mysellings" element={<ProtectedRoute />}>
            <Route exact path="/mysellings" element={<MyOrders />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
