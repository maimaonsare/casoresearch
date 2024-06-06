import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Bootstrap.css';
import Navbar1 from './components/Navbar1';
import { About, Faq, Home, Contact, Services, Structure,Whyus} from './components/Pages';
import { Blogs, Blogsingle} from './components/Pages';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
      <Route path="/" element={<Home />}/>
       <Route path="/About" element={<About />}/> 
       <Route path="/Contact" element={<Contact />}/>
       <Route path="/Faq" element={<Faq />}/>       
       <Route path="/Services" element={<Services />}/>
       <Route path="/Structure" element={<Structure />}/>
       <Route path="/Why-us" element={<Whyus />}/>
       <Route path="/blogs/Blogs" element={<Blogs />}/>
       <Route path="/blogs/Blogsingle" element={<Blogsingle />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
