import React from 'react'
import styles from './ProjectsStyles.module.css'
import projImg1 from '../../assets/viberr.png'
import projImg2 from '../../assets/fresh-burger.png'
import projImg3 from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard'


function Projects() {
  return (
    <section id = "projects" className={styles.container}>
        <h1 className = "sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
        <ProjectCard 
        src = {projImg1}
        h3 = "viberr"
        p = "Streaming App"
        href = "github.com"
        />

        <ProjectCard 
        src = {projImg2}
        h3 = "Fresh Burger"
        p = "Restaurant Shop"
        href = "github.com"
        />

       <ProjectCard 
        src = {projImg3}
        h3 = "Hipsster"
        p = "Glasses Shop"
        href = "github.com"
        />

        </div>


    </section>
  )
}

export default Projects;