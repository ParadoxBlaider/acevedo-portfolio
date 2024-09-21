import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="text-center md:text-end">
          <li><Link className='inline-flex gap-3 items-center text-2xl ' href="https://wa.me/+573154846388"><FontAwesomeIcon icon={faCoffee} className="h-7 blinking-icon"/><span>Contáctame</span></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;