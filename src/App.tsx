import React from 'react';
import './App.css';
import Products from "./domain/Products";

function App() {
  return (
    <div className="App">
        <header>
            <div className="logo">
                <h3>LOGO</h3>
            </div>
            <div>
                <ul className="navigation-list">
                    <li className="navigation-item">Search</li>
                    <li className="navigation-item">Login</li>
                </ul>
            </div>
        </header>
        <main>
            <Products />
        </main>
        <footer>
            <p>e-shop 2021</p>
        </footer>
    </div>
  );
}

export default App;
