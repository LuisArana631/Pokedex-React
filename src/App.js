import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './App.css';

import { Navbar } from './components/ui/Navbar';
import { Pokedex } from './components/pokemon/Pokedex';

export const App = () =>  {
  return (
    <Provider store={ store }>
      <div>
        <div className="row">
            <div className="col">
                <Navbar />
            </div>                
        </div>
        <Pokedex/>
      </div>
    </Provider>
  );
}

export default App;
