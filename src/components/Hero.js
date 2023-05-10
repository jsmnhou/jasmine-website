// main center on home page ("Hey, I'm Jasmine ...")
import React from 'react'

export const Hero = ({ highlight, subTitle, title, children, index }) => {
  return (
    <header className={`hero ${index ? 'index' : ''}`}>
      {subTitle && (
        <div className="sub-title">
          {highlight && <span className="highlight">{highlight}</span>}
          {subTitle}
        </div>
      )}
      {title && <h1>{title}</h1>}
      {children && children}
    </header>
  )
}
