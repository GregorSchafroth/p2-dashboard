import Link from 'next/link';
import Image from 'next/image';
import logo from '../img/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
      <Link href='/'>
        <Image src={logo} alt='Logo' width={40} />
      </Link>
        <ul className='flex gap-4 items-center'>
          <li className='hidden md:block'>
            <Link href='/'>Dashboard</Link>
          </li>
          <li className='hidden md:block'>
            <Link href='/posts'>Posts</Link>
          </li>
        </ul>
      <div className='text-sm text-gray-500 flex items-center'>
        <p className='m-0'>
          &copy; {currentYear} P2 Dashboard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
