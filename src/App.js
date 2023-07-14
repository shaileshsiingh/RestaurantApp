import React from 'react';

import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <Cart/>
      <Header />
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;