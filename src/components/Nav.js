import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BlankLink from './BlankLink';
import githubLogo from '../github.png';
import inLogo from '../in.png';

class Nav extends Component {

  render() {
    return (
      <nav className="page-nav">
        <ul>
          <li><NavLink to="/" activeClassName="active">@annaclf</NavLink></li>
          <li><BlankLink url="https://doc-08-3k-apps-viewer.googleusercontent.com/viewer/secure/pdf/eec6tgr3a20v07iif6g2g4q0ennhm4hr/h0uq4kgh192umeqpdaoq4rssp4o5nvq2/1552932825000/drive/16568993022261383403/ACFrOgClqjbNKqx0HVGtsU63cmyMm7BZOc6YZVrv_Fssq8-_WHbITfJVijZcoNwFwNRr_s2Iouh2GozjdI92_GBoDkB1fqb9GzpbwCWgc2mwqC7f9NXiwSx00isqEtM=?nonce=r4200iub82it0&user=16568993022261383403&hash=jjpvj04n211uol71k7uq7pjgen4kakag" text="Cv" /></li>
          <li><BlankLink url="https://github.com/annaclf" text="GitHub" img={githubLogo} /></li>
          <li><BlankLink url="https://linkedin.com/in/annaclf" text="In" img={inLogo} /></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;