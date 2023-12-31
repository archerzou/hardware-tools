import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import ProductList from '../ProductList/ProductList';
import ProductForm from '../ProductForm/ProductForm';
import Checkout from '../Checkout/Checkout';
import { useCheckout } from '../../hooks/useCheckout';
import CheckoutItemContext from '../../context/CheckoutItemContext';
import './App.css';

const App = () => {
  const [checkoutUpdated, setCheckoutUpdated] = useState(false);
  const { checkoutCount, checkoutItems, setCheckoutItems, error } =
    useCheckout(checkoutUpdated);

  useEffect(() => {
    if (checkoutCount) {
      setCheckoutUpdated(false);
    }
  }, [checkoutCount]);

  const updateCheckoutCount = () => {
    setCheckoutUpdated(true);
  };

  return (
    <Router>
      <CheckoutItemContext.Provider
        value={{
          checkoutCount,
          updateCheckoutCount,
          checkoutItems,
          setCheckoutItems,
          error,
        }}
      >
        <section className="app-wrapper">
          <Navbar />
          <article className="app-container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/my-products" element={<ProductList />} />
              <Route exact path="/new-product-form" element={<ProductForm />} />
              <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
          </article>
        </section>
      </CheckoutItemContext.Provider>
    </Router>
  );
};

export default App;
