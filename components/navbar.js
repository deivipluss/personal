// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around text-white">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/landing">
            <a>Servicios</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
