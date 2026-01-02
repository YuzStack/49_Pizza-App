import pizzaData from "./data";
const path = "public/funghi.jpg";

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

export default App;
