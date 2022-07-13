import React from 'react';
import Image from '../node_modules/next/image';
import Link from '../node_modules/next/link';
import { useRouter } from '../node_modules/next/router';
// import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import { AiOutlineLogout } from 'react-icons/ai';
// import { BiSearch } from 'react-icons/bi';
// import { IoMdAdd } from 'react-icons/io';

import Logo from '../utils/tiktik-logo.png';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image className="cursor-pointer" src={Logo} />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
