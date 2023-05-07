import { Nav } from './Nav';
import { Search } from './Search';

export const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary text-white'
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Photo Gallery
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
          aria-controls='navbarScroll'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarScroll'>
          <Nav />
          <Search />
        </div>
      </div>
    </nav>
  );
};
