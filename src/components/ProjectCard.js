import React, { Component } from 'react';
import BlankLink from './BlankLink';

class Card extends Component {
   state = {
     isPressed:false,
     buttonText: "Flip me"
   }
    toggleClass = () => {
      this.setState(
        {
          isPressed: !this.state.isPressed,
          buttonText: this.state.isPressed ? 'Flip' : 'Flip me back'
        })
    }
    renderCard = () => {
      return <section className="card-section">
      <div className={`card-container ${this.state.isPressed ? 'hover' : ''}`} onClick={this.toggleClass}>
        <div className="flipper">
          <div className="card front">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
            <div className="about-me">
              <h2>{this.props.name}</h2>
              <p>{this.props.tagline}</p>
            </div>
          </div>
          <div className="card back">
            <div className="top dots"></div>
            <div className="title">
              <h2>{this.props.name}</h2>
              <p>{this.props.tagline}</p>
            </div>
            <div className="deadline">
              <p>Deadline: {this.props.deadline}</p>
            </div>
            {this.props.techs &&
            <div className="techs">
              {this.props.techs.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            }
            <div className="demo">
              <BlankLink url={this.props.demo} text="Demo"/>
            </div>
          </div>
        </div>
      </div>
      </section>
    }
    render() {
    return (
      <>
        {this.renderCard()}
      </>
    );
  }
}

export default Card;