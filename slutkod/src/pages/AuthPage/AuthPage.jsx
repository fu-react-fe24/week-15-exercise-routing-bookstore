import { useNavigate } from 'react-router-dom';
import './authPage.css';
import { useState, useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import users from '../../data/users';

function AuthPage({user, setUser}) {
  const [activeForm, setActiveForm] = useState('login');
  const [userList, setUserList] = useState(users);
  const navigate = useNavigate();

  useEffect(() => {
    if(user) navigate('/');
  }, []);

  const handleLogin = (username, password) => {
    const user = userList.find(user => user.username === username && user.password === password);
    if (user) {
      setUser(user);
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  }

  const handleRegister = (username, password) => {
    const existingUser = userList.find(user => user.username === username);
    if (existingUser) {
      alert('Username already exists');
    } else {
      const newUser = { id: userList.length + 1, username, password };
      setUserList([...userList, newUser]);
      setActiveForm('login');
    }
  }

  return (
    <section className="page auth-page">
        {
          activeForm === 'login' ?
          <LoginForm 
            setUser={setUser} 
            setActiveForm={setActiveForm}
            handleLogin={handleLogin}
          /> : 
          <RegisterForm 
            setUser={setUser} 
            setActiveForm={setActiveForm}
            handleRegister={handleRegister}
          />
        }
    </section>
  )
}

export default AuthPage;
