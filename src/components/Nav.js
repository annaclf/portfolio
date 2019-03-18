import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import BlankLink from './BlankLink';
import githubLogo from '../github.png';
import inLogo from '../in.png';

class Nav extends Component {
  state = {
    isOpen: false,
  }
  toggleMenu = () => {
    console.log('clicked');
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <nav className="page-nav">
      <ul>
        <li><NavLink to="/" activeClassName="active">@annaclf</NavLink></li>
        <li><BlankLink text="Cv" url="/cv.pdf" /></li>
        <li><BlankLink url="https://github.com/annaclf" text="GitHub" img={githubLogo} /></li>
        <li><BlankLink url="https://linkedin.com/in/annaclf" text="In" img={inLogo} /></li>
      </ul>
        {/* <ToggleButton isOpen={this.state.isOpen} toggleMenu={this.toggleMenu}/> */}
        {/* <h2>Música Porc</h2> */}

        {/* <Sidebar /> */}
      </nav>
    );
  }
}

export default Nav;