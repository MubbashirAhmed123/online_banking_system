import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const token =localStorage.getItem('token')

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Create Account', url: '/create_account' },
    { id: 2, text: token?'Dashboard':'Login', url: token? '/internet-banking': '/login' },
    { id: 3, text: 'About', url: '/about' },
    { id: 4, text: 'Contact', url: '/contact' },
  ];

  return (
    <nav className="bg-blue-400 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 py-3 text-[#002244]">
        <Link to='/' className="text-3xl font-bold ">IB Bank</Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-5 items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-[#7CB9E8] rounded-lg font-semibold cursor-pointer duration-300 hover:text-gray-900"
            >
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`fixed md:hidden top-0 left-0 w-2/3 h-full bg-blue-400 border-r border-gray-700 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <h1 className='m-5'><Link to='/' className="text-3xl font-bold text-gray-800 ">IB Bank</Link></h1>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b border-gray-700 hover:bg-[#7CB9E8] font-semibold hover:text-gray-900 duration-300 cursor-pointer"
          >
            <Link to={item.url} onClick={() => setNav(false)}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
