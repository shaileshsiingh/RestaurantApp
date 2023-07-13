import React from 'react';

import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;