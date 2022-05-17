import { Routes, Route } from 'react-router-dom';

import {Main} from './pages/Main'
import {About} from './pages/About/';
import {Contact} from './pages/Contact/';
import {Skills} from './pages/Skills/';
import {Portfolio} from './pages/Portfolio/';
import {Experience} from './pages/Experience/';

const RouteElement = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/"  element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default RouteElement;