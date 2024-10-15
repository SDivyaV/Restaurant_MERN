import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import { data } from '../restApi.json';

const Navbar = () => {
    const [show,setShow] = useState(false);

  return (
    <nav>
        <div className='logo'>ONE8</div>
        <div className={show ? "navLinks showmenu": "navLinks"}>
          <div className='links'>
            {data[0].navbarLinks.map((element) => {
                return(
                  <Link 
                    to={element.link}
                    key={element.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    {element.title}
                  </Link>
                );
              })
            }
          </div>
          <button className='menuBtn'>OUR MENU</button>
        </div>
        <div className='hamburger' onClick={() => setShow(!show)}>
            <MenuIcon />
        </div>
    </nav>
  )
}

export default Navbar
