import React from 'react';

const MailLink = (props) => {
  return <a rel="noopener noreferrer" href={`mailto:${props.url}`}>{props.url}</a>
}

export default MailLink;