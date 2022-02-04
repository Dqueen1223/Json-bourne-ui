import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import HomePage from '../home-page/HomePage';
// import ProfilePage from '../Profile/Profilepage';
import Footer from '../footer/Footer';
import CreateProductPage from '../create-product/CreateProduct';
// eslint-disable-next-line import/no-duplicates
import Header from '../header/Header';
import LogoutPage from '../Profile/Logoutpage';
import MaintenancePage from '../maintenance-page/MaintenancePage';
import ProfilePage from '../Profile/Profilepage';
// eslint-disable-next-line import/no-duplicates
// import isLoggedIn from '../header/Header';

toast.configure();
/**
 * @name App
 * @returns component
 */
const App = () => (
  <BrowserRouter>
    <Header />
    <div className="headerContainer">
      <ToastContainer
        autoClose={8000}
        position={toast.POSITION.TOP_CENTER}
        pauseOnHover={false}
      />
    </div>
    <Switch>
      <Route exact path="/" render={() => <ProductPage />} />
      <Route exact path="/home" render={() => <HomePage />} />
      <Route exact path="/checkout" render={() => <CheckoutPage />} />
      <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
      <Route exact path="/profilepage" render={() => <ProfilePage />} />
      <Route exact path="/maintenance/create" render={() => <CreateProductPage />} />
      <Route exact path="/logoutpage" render={() => <LogoutPage />} />
      <Route exact path="/maintenance" render={() => <MaintenancePage />} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
