import { Route, Routes as Router } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';

export default function Routes() {
  return (
    <Router>
      <Route path='/' exact element={<Home />} />
      <Route path='/sobre-nos' element={<About />} />
    </Router>
  );
}