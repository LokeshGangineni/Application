import React from 'react';
import Sidebar from './Sidebar';
import Hamburger from './Hamburger';

function SideBarLayout() {
  return (
    <>
      <div className='hidden sm:block '>
        <Sidebar />
      </div>
      <div className='sm:hidden '>
        <Hamburger />
      </div>
    </>
  );
}

export default SideBarLayout;
