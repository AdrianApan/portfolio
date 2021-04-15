import React from 'react'
import 'devicon'

function setDevIcon(name, theme) {
  switch (name) {
    case 'javascript':
    case 'html5':
    case 'css3':
    case 'react':
    case 'nodejs':
    case 'postgresql':
    case 'mongodb':
    case 'python':
    case 'php':
    case 'photoshop':
    case 'bootstrap':
    case 'typescript':
      return <i className={`devicon-${name}-plain colored`}></i>
    case 'express':
    case 'sass':
      return theme === 'light' ? (
        <i className={`devicon-${name}-original colored`}></i>
      ) : (
        <i className={`devicon-${name}-original`}></i>
      )
    case 'tensorflow':
      return (
        <img
          src="/images/tensorflow.png"
          alt="Tensorflow"
          className="custom-tech-icon"
        />
      )
    case 'firebase':
      return (
        <img
          src="/images/firebase.png"
          alt="Firebase"
          className="custom-tech-icon"
        />
      )
    case 'electron':
      return (
        <img
          src="/images/electron.png"
          alt="Electron"
          className="custom-tech-icon"
        />
      )
    case 'semantic':
      return (
        <img
          src="/images/semantic.png"
          alt="Semantic"
          className="custom-tech-icon"
        />
      )
    case 'd3':
      return (
        <img src="/images/d3.png" alt="D3.js" className="custom-tech-icon" />
      )
    default:
      return name
  }
}

export default setDevIcon
