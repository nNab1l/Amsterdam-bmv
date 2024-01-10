import  './App.css';
import Header from './header/Header';
import Info from './info/Info';
import Projects from './projects/projects';
import Detail from './detail/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Info />
              <Projects />
            </>
          }
        />
        <Route path="/details/:projectId" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
