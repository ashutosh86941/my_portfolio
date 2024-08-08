import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section className = {styles.container}>
       <h1 className='sectionTitle'>Contact</h1>
       
          <form action="">

            <div className='formGroup'>
             <input id ="name" name = "name" placeholder='Name' type="text" />
             </div>
             <div className='formGroup'>
             <input name='email' id='email' placeholder='Email' type="email" />
             </div>
             <div className='formGroup'>
             <textarea name = "message" id = "message" placeholder='Message'>

             </textarea>
             </div>
             <input className="hover btn" type="submit" value="Submit" />

          </form>

       

    </section>
  )
}

export default Contact