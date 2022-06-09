import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      <Navbar></Navbar>

    </div>
  );
}

export default App;
