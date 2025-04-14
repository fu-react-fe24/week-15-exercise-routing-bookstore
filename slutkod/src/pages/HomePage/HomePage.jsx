import { useEffect } from 'react';
import BookList from '../../components/BookList/BookList';
import Header from '../../components/Header/Header';
import './homePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage({cart, removeFromCart, addToCart, user}) {
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) navigate('/auth');
  }, []);

  return (
    <section className="page home-page">
        <BookList cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
    </section>
  )
}

export default HomePage;
