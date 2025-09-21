import { useEffect, useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;

    const onScroll = () => {
      const current = window.pageYOffset || document.documentElement.scrollTop;
      if (current > lastScroll && current > 50) {
        // scrolling down
        setHidden(true);
      } else if (current < lastScroll) {
        // scrolling up
        setHidden(false);
      }
      lastScroll = current <= 0 ? 0 : current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
      <p className="logo">&lt;Inowei<span className="name">Anagha</span> /&gt;</p>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Techstack</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}