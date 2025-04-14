import './cartPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Cartpage({cart, user}) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!user) navigate('/auth');
  }, []);

  return (
    <section className="page cart-page">
        <section className="cart-list">
          {
            cart ? 
              cart.map((item, index) => {
                return (
                  <section className="cart-list__item" key={index}>
                    <h2 className="cart-list__title">{item.book}</h2>
                    <p className="cart-list__qty">Quantity: {item.qty}</p>
                  </section>
                )
              })
              : <h2 className="cart-list__empty">Your cart is empty</h2>
          }
        </section>
    </section>
  )
}

export default Cartpage;
