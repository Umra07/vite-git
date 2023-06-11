import { BrowserRouter, NavLink } from 'react-router-dom';
import Router from './pages/router';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '20px',
        }}
        className="nav">
        <li>
          <NavLink
            style={{
              padding: '10px',
              backgroundColor: 'blueviolet',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
            to="">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              padding: '10px',
              backgroundColor: 'blue',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
            to="about">
            About
          </NavLink>
        </li>
      </ul>
    </BrowserRouter>
  );
}

export default App;
