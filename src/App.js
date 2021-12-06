import './App.css';
import { Pokecard } from './components/pokemon/Pokecard';

import { Navbar } from './components/ui/Navbar';

function App() {
  return (
    <div>
      <div className="row">
          <div className="col">
              <Navbar />
          </div>                
      </div>
      <div className="row m-2">
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
      </div>
      <div className="row m-2">
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
      </div>
      <div className="row m-2">
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
        <div className="col">
          <Pokecard />
        </div>
      </div>  
    </div>
  );
}

export default App;
