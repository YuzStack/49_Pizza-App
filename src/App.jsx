import React from 'react';
import pizzaData from './data';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Main>
        <Header />
        <Menu />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return <main>{children}</main>;
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className='menu'>
      <h2>Our menu:</h2>
      <div className='pizzas'>
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} {...pizza} />
        ))}
      </div>
    </div>
  );
}

function Pizza({ photoName, name, ingredients, price }) {
  return (
    <div className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const date = new Date();
  const hour = date.getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {date.toLocaleTimeString()}.{' '}
      {`${isOpen ? "We're currently open!" : "Sorry, we're close."}`}
    </footer>
  );
}

export default App;
