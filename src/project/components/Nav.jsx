export const Nav = () => {
  return (
    <ul
      className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'
      style={{ '--bs-scroll-height': '100px' }}
    >
      <li className='nav-item'>
        <a className='nav-link active' aria-current='page' href='#'>
          Home
        </a>
      </li>
      <li className='nav-item dropdown'>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          role='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Login
        </a>
        <ul className='dropdown-menu'>
          <li>
            <a className='dropdown-item' href='#'>
              Profile
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
