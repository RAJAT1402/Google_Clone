import React from 'react';

function Footer() {
    let year = new Date().getFullYear();

    return  <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
    © {year} Goggle Clone, Inc.
  </div>
  }
  
export default Footer;