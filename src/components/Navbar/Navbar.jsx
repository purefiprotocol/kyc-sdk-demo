import { NavLink } from 'react-router-dom';
import { Web3Button, Web3NetworkSwitch } from '@web3modal/react';
import ReactLogo from '../../assets/icons/purefi-logo.svg?react';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-md">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div>
          <span className="mr-5">
            <ReactLogo />
          </span>
          <NavLink className="navlink mr-2" to="/">
            Swap
          </NavLink>
          <NavLink className="navlink mr-2" to="/kyc">
            KYC
          </NavLink>
        </div>

        <div>
          <form className="form-inline">
            <div className="mr-2"></div>
            <div className="mr-2">
              <Web3NetworkSwitch />
            </div>
            <div>
              <Web3Button label="Connect" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
