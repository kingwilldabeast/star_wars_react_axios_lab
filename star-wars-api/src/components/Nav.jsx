import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav (props) {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
      };
    
    return (
      
    <div className="nav">
      <Link to="/" onClick={() => handleClick('/')}>
        <h2 className={activeLink === '/' ? 'navtext active' : 'navtext'}>Home</h2>
      </Link>
      <Link to="/films" onClick={() => handleClick('/films')}>
        <h2 className={activeLink === '/films' ? 'navtext active' : 'navtext'}>Films</h2>
      </Link>
      <Link to="/people" onClick={() => handleClick('/people')}>
        <h2 className={activeLink === '/people' ? 'navtext active' : 'navtext'}>People</h2>
      </Link>
      <Link to="/species" onClick={() => handleClick('/species')}>
        <h2 className={activeLink === '/species' ? 'navtext active' : 'navtext'}>Species</h2>
      </Link>
      <Link to="/planets" onClick={() => handleClick('/planets')}>
        <h2 className={activeLink === '/planets' ? 'navtext active' : 'navtext'}>Planets</h2>
      </Link>
      <Link to="/vehicles" onClick={() => handleClick('/vehicles')}>
        <h2 className={activeLink === '/vehicles' ? 'navtext active' : 'navtext'}>vehicles</h2>
      </Link>
      <Link to="/starships" onClick={() => handleClick('/starships')}>
        <h2 className={activeLink === '/starships' ? 'navtext active' : 'navtext'}>Starships</h2>
      </Link>
      <Link to="/bikini" onClick={() => handleClick('/bikini')}>
        <h2 className={activeLink === '/bikini' ? 'navtext bikini-link-symbol active' : 'navtext bikini-link-symbol'}>^</h2>
      </Link>
    </div>
    )
  }