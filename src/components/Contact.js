import React, { Component } from 'react';
import MailLink from './MailLink';

class Contact extends Component {
  render() {
    return (
      <ul>
        <li><MailLink url="annaclfr@gmail.com"/></li>
      </ul>
    );
  }
}

export default Contact;