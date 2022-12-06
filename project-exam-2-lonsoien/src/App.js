import './sass/style.scss';
import Login from './components/admin/Login';
import DashBoard from './components/dashboard/DashBoard';
import Home from "./components/home/Home"; 
import Menu from "./components/layout/Menu"; 
import ContainerTrepanel from './components/products/ContainerTrepanel';
import ContainerFolie from './components/products/ContainerFolie';
import Habitatpanel from './components/products/Habitatpanel';
import Trerampe from './components/products/Trerampe';
import Sykkelhotell from './components/products/Sykkelhotell';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Footer from './components/footer/Footer';

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
        <Route path="/containerfolie" element={<ContainerFolie />} />
        <Route path="/containertrepanel" element={<ContainerTrepanel />} />
        <Route path="/habitatpanel" element={<Habitatpanel />} />
        <Route path="/trerampe" element={<Trerampe />} />
        <Route path="/sykkelhotell" element={<Sykkelhotell />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Container>
    </Router>
    <Footer />
    </>
  );
}

export default App;
