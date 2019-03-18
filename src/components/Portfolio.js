import React, { Component } from 'react';
import Typer from './Typer';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

class Portfolio extends Component {

  render() {
    const describingWords = ['Frontend developer.', 'musician.', 'producer.', 'mom.', 'Iron-pong-tournament winner. (LOL)'];
    return (
      <div className="portfolio container" id="top">
        <header>
        <Typer
          heading={'I am a:'}
          dataText={describingWords}
        />
          <p>I don't sleep very much.</p>
        </header>
        <About />
        <Projects />
        <Footer />
        <span className="to-top" onClick={ () => window.scrollTo(0, 0)}>Top</span>
      </div>
    );
  }
}

export default Portfolio;