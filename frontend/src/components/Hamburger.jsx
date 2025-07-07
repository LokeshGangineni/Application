// import React, { useState } from 'react';
// import { FiMenu } from 'react-icons/fi';
// import Sidebar from './Sidebar';

// function Hamburger() {
//   const [openSideBar, setSideBarOpen] = useState(false);

//   return (
//     <div className='sm:hidden p-2'>
//       <button onClick={() => setSideBarOpen(!openSideBar)} className='text-3xl'>
//         <FiMenu />
//       </button>

//       {openSideBar
//        && (
//         <div className="">
//           <Sidebar />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Hamburger;


import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';

function Hamburger() {
  const [openSideBar, setSideBarOpen] = useState(false);

  return (
    <div className='sm:hidden p-2'>
      <button onClick={() => setSideBarOpen(!openSideBar)} className='text-3xl text-white'>
        <FiMenu />
      </button>

      {openSideBar && (
        <div className="fixed top-20 z-50  h-full bg-[#1A202C] shadow-lg w-[250px]">
          <Sidebar onClose={() => setSideBarOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Hamburger;

