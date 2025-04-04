export default function Header() {
  return (
    <header className="header">
      <div className="__container">
        <div className="__logo">
          <a href="/">Firebits</a>
        </div>

        <nav className="__nav">
          <a href="/" className="navText active">
            Home
          </a>
          <a href="/about" className="navText">
            About
          </a>
          <a href="/contact" className="navText">
            Services
          </a>
          <a href="/reviews" className="navText">
            Reviews
          </a>
          <a href="/contact" className="navText">
            Contact
          </a>
        </nav>
        <div></div>
      </div>
    </header>
  );
}
