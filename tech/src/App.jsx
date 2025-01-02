import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';


function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>}/>
        <Route path="/about" element={<Layout><About /></Layout>}/>
         {/* ............. */}
      </Routes>
    </Router>
  );
}

export default App;
