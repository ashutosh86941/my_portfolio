import React from 'react'

function SkillList(props) {
  return (
    <span>
        <img src={props.tick} alt="" />
        <p>{props.skill}</p>
    </span>
  )
}

export default SkillList