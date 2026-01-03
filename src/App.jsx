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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className='menu'>
      <h2>Our menu:</h2>

      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzas.map((pizza, index) => (
            <Pizza key={index} {...pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </div>
  );
}

function Pizza({ photoName, name, ingredients, price }) {
  return (
    <li className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>${price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const date = new Date();
  const hour = date.getHours();
  const openHour = 19;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {/* Conditional Rendering with Short-Circuting (&&) */}
      {/* {isOpen && (
        <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className='btn'>Order</button>
        </div>
      )} */}

      {/* Conditional Rendering with Ternay Operator */}
      {isOpen ? (
        <div className='order'>
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          W're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default App;
