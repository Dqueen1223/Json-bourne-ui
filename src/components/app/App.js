import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MaintenancePage from '../maintenance-page/MaintenancePage';

/**
 * @name App
 * @returns component
 */
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <ProductPage />} />
      <Route exact path="/checkout" render={() => <CheckoutPage />} />
      <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
      <Route exact path="/maintenance" render={() => <MaintenancePage />} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
