import React from 'react'

export const EducationHeading = ({ title, description, slug }) => {
  return (
    <h2 className="home-heading">
      <div>
        <div className="title">{title}</div>
        {description && <div className="description">{description}</div>}
      </div>
    </h2>
  )
}
