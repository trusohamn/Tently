import React, { useContext } from 'react';

import Location from './Location';
import { Route } from 'react-router-dom';
import { MyContext } from '../contexts/MyContextProvider';


function App() {
  const context = useContext(MyContext);

  const switchText = (context.mode === 'explore') ? 'Edit map' : 'Explore';

  return (

    <div className="App">
      <button id="switch modes" onClick={context.switchMode}>{switchText}</button>
      {context.redirect}
      <Route path="/" component={Location} />
    </div>
  );
}

export default App;
