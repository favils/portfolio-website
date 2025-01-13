import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/") {
      const navLinks = navRef.current.children;

      gsap.fromTo(navLinks, 
        {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: 'power3.out',
        },
        {
          opacity: 1,
          y: 0,
          duration: 3,
          stagger: .5,
          ease: 'power3.out',
        }
      );
    }
  }, [location.pathname]);

  return (
    <nav className="flex justify-center">
      <div className="flex flex-col mt-10 w-1/2" ref={navRef}>
        <div className="flex justify-between items-center">
          <div className="border-r-2 border-black p-4">
            <Link to="/" className="m-4 p-4 navbar-link">home</Link>
          </div>
          <div className="flex">
            <div className="border-l-2 border-black p-4">
              <Link to="/work" className="m-4 navbar-link">work</Link>
            </div>
            <div className="border-l-2 border-black p-4">
              <Link to="/contact" className="m-4 navbar-link">contact</Link>
            </div>
            <div className="border-l-2 border-black p-4">
              <Link to="/blog" className="m-4 navbar-link">blog</Link>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-black w-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
