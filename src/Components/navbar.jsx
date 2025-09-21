import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <nav className={`navbar ${open ? 'navbar--open' : ''}`}>
      <p className="logo">&lt;Inowei<span className="name">Anagha</span> /&gt;</p>

      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span className="hamburger" aria-hidden="true"></span>
      </button>

      <ul className={`nav-links ${open ? 'nav-links--open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Techstack</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}