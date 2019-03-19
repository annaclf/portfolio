import React, { Component } from 'react';

class Project extends Component {
  render() {
    const {module, title, children} = this.props;
    return (
      <section className="project-description">
          <h3>{module} <span className="h1-desc">{title}</span></h3>
          {children}
      </section>
    );
  }
}

export default Project;