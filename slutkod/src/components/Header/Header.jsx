import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header({cartBalance, setUser}) {
  const navigate = useNavigate();

  const logOut = () => {
    setUser(null);
    navigate('/auth');
  }

  return (
    <header className="page-header">
        <Logo />
        <button onClick={logOut}>Logout</button>
        <Cart cartBalance={cartBalance} />
    </header>
  )
}

export default Header;
