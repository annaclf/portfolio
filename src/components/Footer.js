import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import MailLink from './MailLink';

const Footer = () => {
    return (
      <div className="site-footer">
        <h2>Other references</h2>
        <p>I have been a Wordpress developer for many years. I have made themes from scratch and worked with WooCommerce and YOAST. I am not going to post any links for those types of websites but if you are interested of seeing any of that work, feel free to ask me for some links. </p>
        <Contact />
      </div>
    );
}

export default Footer;