import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="text-center md:text-end">
          <li className=''>
            <div className='inline-flex gap-3 items-center text-lg border-2 border-[#233449] rounded-full text-[#233449] p-4'>
              <FontAwesomeIcon icon={faCoffee} className="h-5 blinking-icon"/><span>Contáctame</span>
              <Link className='inline-flex gap-3 items-center text-2xl' href="https://wa.me/+573154846388">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
              <Link className='inline-flex gap-3 items-center text-2xl' href="mailto:maacevedog2010@gmail.com">
                <FontAwesomeIcon icon={faMailBulk} />
              </Link>
              <Link className='inline-flex gap-3 items-center text-2xl' href="https://www.linkedin.com/in/miguel-angel-acevedo-gantiva-b71070203/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;