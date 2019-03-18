import React from 'react';

const BlankLink = (props) => {
  return <a target="_blank" rel="noopener noreferrer" href={props.url}>{props.img ? <img src={props.img} alt={props.text}/> : props.text}</a>
}

export default BlankLink;
