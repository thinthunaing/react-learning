import './style.css';

function Header() {
  return (
    <header className="header">
      <img src="assets/react.svg" alt="React Logo" className='logo' />
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className='nav-item'>Pricing</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;