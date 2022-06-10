
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ProjectPhTools from './components/Projects/ProjectPhTools';
import Grocery from './components/Projects/GroceryWerehouse/Grocery';
import Independent from './components/Projects/Independent/Independent';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Header></Header>
      <About></About> */}
      {/* <Project></Project> */}
      {/* <Contact></Contact> */}
      {/* <Footer></Footer> */}


      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/project' element={<Project></Project>}></Route>
        <Route path='/PH-Tools' element={<ProjectPhTools></ProjectPhTools>}></Route>
        <Route path='/grocery' element={<Grocery></Grocery>}></Route>
        <Route path='/independent' element={<Independent></Independent>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      {/* <Contact></Contact> */}
      <Footer></Footer>

    </div>
  );
}

export default App;
