import React from "react";
import pizzaData from "./data";

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu:</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Main({ children }) {
  return <main>{children}</main>;
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()}. We're current open!</footer>
  );

  // return React.createElement("footer", null, "We're current open!");
}

function App() {
  return (
    <>
      <Main>
        <Header />
        <Menu />
      </Main>
      <Footer />
    </>
  );
}

export default App;
