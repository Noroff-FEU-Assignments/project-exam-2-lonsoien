import './sass/style.scss';
import Admin from './components/admin/Admin';
import Home from "./components/home/Home"; 
import Menu from "./components/layout/Menu"; 
import ContainerTrepanel from './components/products/ContainerTrepanel';
import ContainerFolie from './components/products/ContainerFolie';
import Habitatpanel from './components/products/Habitatpanel';
import Trerampe from './components/products/Trerampe';
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
        <Route path="/home" exact element={<Home />} />
        <Route path="/containerfolie" element={<ContainerFolie />} />
        <Route path="/containertrepanel" element={<ContainerTrepanel />} />
        <Route path="/habitatpanel" element={<Habitatpanel />} />
        <Route path="/trerampe" element={<Trerampe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Container>
    </Router>
    </>
  );
}

export default App;
