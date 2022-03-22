import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1 className="header-title">Math Magicians</h1>
    <nav className="navbar">
      <Link to="math-magicians/" className="link">Home</Link>
      <Link to="math-magicians/calculator" className="link">Calculator</Link>
      <Link to="math-magicians/quote" className="link">Quote</Link>
    </nav>
  </header>
);

export default Header;
