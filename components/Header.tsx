import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="text-center md:text-end">
          <li className=''>
            <Link className='inline-flex gap-3 items-center text-lg border-2 border-[#233449] rounded-full text-[#233449] p-4' href="https://wa.me/+573154846388">
              <FontAwesomeIcon icon={faCoffee} className="h-5 blinking-icon"/><span>Contáctame</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;