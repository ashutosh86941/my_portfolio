import React from 'react'
import tick from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import styles from './SkillsStyles.module.css'


function Skills() {
  return (
    <section className={styles.container}>
        <h1 className = "sectionTitle">Skills</h1>
        <div className = {styles.skillList}>
        <SkillList tick = {tick} skill = "Html" />
        <SkillList tick = {tick} skill = "CSS" />
        <SkillList tick = {tick} skill = "JavaScript" />
        </div>
        
        <hr />
        <div className = {styles.skillList}>
        <SkillList tick = {tick} skill = "Nodejs" />
        <SkillList tick = {tick} skill = "Reactjs" />
        <SkillList tick = {tick} skill = "Express" />
        </div>
        <hr />
        <div className = {styles.skillList}>
        <SkillList tick = {tick} skill = "Tailwind CSS" />
        
        </div>


    </section>
  )
}

export default Skills