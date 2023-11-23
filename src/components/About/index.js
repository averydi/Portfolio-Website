import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { faSailboat } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    
    return (
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />   
                </h1>
                <p>
                    As a determined recent bootcamp graduate, I am committed to improving my skills and becoming a better software developer. With a solid foundation in HTML, CSS, Javascript, and Python, I have only scratched the surface of what this field has to offer. I view every coding challenge as an exciting opportunity to learn and grow.
                    I have improved my communication skills, making me an effective bridge between technical and non-technical colleagues. I am excited to start this journey of continuous improvement and growth as a software developer, eager to take on new challenges and contribute my expertise to innovative projects.
                </p>

                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#61dbfb" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#E34C26" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#264de4" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faPython} color="#F0DB4F" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#FFD43B" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color="#FFD43B" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About