import Home from './pages/Home/home';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
