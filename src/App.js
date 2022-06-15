import React, { useEffect } from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { calculateTotals } from './redux/features/cartSlice';
import { getCartItems } from './redux/features/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getCartItems());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
