import './sass/style.scss';
import Login from './components/login/Login';
import Home from "./components/home/Home"; 
import Menu from "./components/layout/Menu"; 
import ContainerTrepanel from './components/products/ContainerTrepanel';
import ContainerFolie from './components/products/ContainerFolie';
import Habitatpanel from './components/products/Habitatpanel';
import Sykkelhotell from './components/products/Sykkelhotell';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Container from 'react-bootstrap/esm/Container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'; 
import EditPost from './components/dashboard/posts/EditPost'; 
import PostPage from "./components/dashboard/posts/PostPage";
import AddPost from "./components/dashboard/posts/AddPost";
import DashBoardPage from './components/dashboard/DashBoardPage';



function App() {
  return (
    <>
    <AuthProvider>
    <Router>
    <Menu />
    <Container>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/containerfolie" element={<ContainerFolie />} />
        <Route path="/containertrepanel" element={<ContainerTrepanel />} />
        <Route path="/habitatpanel" element={<Habitatpanel />} />
        <Route path="/sykkelhotell" element={<Sykkelhotell />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/dashboard/posts" element={<PostPage />} />
        <Route path="/dashboard/posts/add" element={<AddPost />} />
        <Route path="/dashboard/posts/edit/:id" element={<EditPost />} />
      </Routes>
    </Container>
    </Router>
    </AuthProvider>
    <Footer />
    </>
  );
}

export default App;
