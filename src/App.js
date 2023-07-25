import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/homepage';
import Caloric from './pages/caloric/caloric';

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/ffxivmechanicsim' render={<Homepage />} />
          <Route exact path='/ffxivmechanicsim/caloric' render={<Caloric />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;