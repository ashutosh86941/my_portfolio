import React from 'react'

function ProjectCard(props) {
  return (
    <a target = "_blank"
        href={props.href}>
        <img className = "hover" src={props.src} alt="" />
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
        </a>
  )
}

export default ProjectCard