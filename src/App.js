import Homepage from './components/Homepage';
import Readmore from './components/Readmore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Homepage />} />
        <Route path="/Readmore" element={<Readmore />} />
      </Routes>
    </Router>
  );
}

export default App;
