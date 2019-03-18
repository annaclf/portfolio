import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <header className="not-found">
        <h1>Not found</h1>
        <NavLink to="/" activeClassName="active">@annaclf | Web developer</NavLink>
      </header>
    );
  }
}

export default NotFound;