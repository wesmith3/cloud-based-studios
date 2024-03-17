import Link from 'next/link';
import { Button } from 'semantic-ui-react';

function NavBar() {
  return (
    <div className="navbar">
      <Link href='/'>
        <Button className='menu-btn'>
          Home
        </Button>
      </Link>
      <Link href='/about'>
        <Button className='menu-btn'>
          About Us
        </Button>
      </Link>
      <Link href='/services'>
        <Button className='menu-btn'>
          Services
        </Button>
      </Link>
      <Link href='/portfolio'>
        <Button className='menu-btn'>
          Portfolio
        </Button>
      </Link>
      <Link href='/projects'>
        <Button className='menu-btn'>
          Projects
        </Button>
      </Link>
      <Link href='/contact'>
        <Button className='menu-btn'>
          Contact
        </Button>
      </Link>
    </div>
  );
}

export default NavBar;
