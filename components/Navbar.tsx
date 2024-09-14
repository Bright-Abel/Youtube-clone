import { Stack } from '@mui/material';
import Link from 'next/link';
import { logo } from '@/custom/constant';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className="fixed bg-black w-full p-2 z-10">
      <div className="lg:w-[75%] w-full flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            className=""
            alt="youtube_logo"
            height={45}
            width={45}
          />
        </Link>

        <SearchBar />
      </div>
    </div>
  );
};
export default Navbar;
