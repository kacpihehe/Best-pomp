import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Projekty, Kontakt, FAQ, Uslugi, Info, Home } from '../pages';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/uslugi' element={<Uslugi />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/projekty' element={<Projekty />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
