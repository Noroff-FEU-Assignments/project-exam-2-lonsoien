import './sass/style.scss';
import Home from "./components/home/Home"; 
import Menu from "./components/layout/Menu"; 
import SykkelcontainerFolie from './components/products/SykkelcontainerFolie';
import SykkelcontainerTrepanel from './components/products/SykkelcontainerTrepanel';
import Habitatpanel from './components/products/Habitatpanel';
import Trepanel from './components/products/Trerampe';
import Projects from './components/projects/Projects';
import About from './components/about/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <>
    <Router>
    <Menu />
    <Container>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sykkelcontainerfolie" element={<SykkelcontainerFolie />} />
        <Route path="/sykkelcontainertrepanel" element={<SykkelcontainerTrepanel />} />
        <Route path="/habitatpanel" element={<Habitatpanel />} />
        <Route path="/trepanel" element={<Trepanel />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </Router>
    </>
  );
}

export default App;
