import React from 'react';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <a href='#'>
          <h1 className='text-5xl text-purple-400'>Evan Kagarise</h1>
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
