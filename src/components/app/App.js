import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductPage from '../product-page/ProductPage';
import CheckoutPage from '../checkout-page/CheckoutPage';
import ConfirmationPage from '../confirmation-page/ConfirmationPage';
import HomePage from '../home-page/HomePage';
import Header from '../header/Header';
import Footer from '../footer/Footer';

toast.configure();
/**
 * @name App
 * @returns component
 */
const App = () => {
/**
 * @name displayToast
 * @param message {string} - a string message
 * @param type {string} - a string -'success','info','warning','error'
 */
  const displayToast = (message, type) => {
    switch (type) {
      case 'success': {
        toast.success(message);
        break;
      }
      case 'info': {
        toast.info(message);
        break;
      }
      case 'warning': {
        toast.warn(message);
        break;
      }
      case 'error': {
        toast.error(message);
        break;
      }
      default: {
        toast(message);
      }
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <ProductPage />} />
        <Route exact path="/home" render={() => <HomePage />} />
        <Route exact path="/checkout" render={() => <CheckoutPage />} />
        <Route exact path="/confirmation" render={() => <ConfirmationPage />} />
      </Switch>
      <div className="headerContainer">
        <ToastContainer
          autoClose={8000}
          position={toast.POSITION.TOP_CENTER}
          pauseOnHover={false}
        />
        <Header />
        <div className="toastBar">
          <button className="btnToast success" type="button" onClick={() => displayToast('success message', 'success')}>Success</button>
          <button className="btnToast info" type="button" onClick={() => displayToast('info message', 'info')}>Info</button>
          <button className="btnToast warning" type="button" onClick={() => displayToast('warning message', 'warning')}>Warn</button>
          <button className="btnToast error" type="button" onClick={() => displayToast('error message', 'error')}>Error</button>
          <button
            className="btnToast"
            type="button"
            onClick={() => displayToast('Default toast provided with extra text to demo that the toast component will expand vertically up to 800px.')}
          >
            Default
          </button>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
