import { Route, Routes as Router } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';

export default function Routes() {
  return (
    <Router>
      <Route path='/' exact element={<Home />} />
      <Route path='/sobre-nos' element={<About />} />
      <Route path='/contato' element={<Contact />} />
    </Router>
  );
}