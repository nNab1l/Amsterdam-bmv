import  './App.css';
import Header from './header/Header';
import Info from './info/Info';
import Projects from './projects/projects';
import Detail from './detail/Detail';
import Work from './work/Work';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/Amsterdam-bmv"
          element={
            <>
              <Header />
              <Info />
              <Projects />
              <Work />
              <Footer />
            </>
          }
        />
        <Route path="/details/:projectId" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
