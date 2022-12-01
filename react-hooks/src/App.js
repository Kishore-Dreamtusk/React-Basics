import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hook1 from './components/refHook/ref_hook2';
import Reducer from './pages/reducer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/reducer' element={<Reducer/>}></Route>
          <Route path='/' element={<Hook1/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
