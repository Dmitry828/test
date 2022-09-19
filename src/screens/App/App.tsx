import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from '../../core/routers/routers';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
};

export default App;
