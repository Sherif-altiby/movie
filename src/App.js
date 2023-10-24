import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Watchlist from './Components/Watchlist';
import Add from './Components/Add';
import Watched from './Components/Watched';
import ContextProvider from './Components/Context/GlobalContext';

function App() {
  return (
      <Router>
      <Header />
        <ContextProvider>
        <Routes>

          <Route path='/'        element = {<Watchlist />} />
          <Route path='/movie'        element = {<Add />} />
          <Route path='/add'     element = {<Add       />} />
          <Route path='/watched' element = {<Watched   />} />
          
        </Routes>

        </ContextProvider>
      </Router>
  );
}

export default App;
