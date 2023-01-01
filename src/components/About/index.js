import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
const About = () => {

    const[letterClass, setLetterClass] = useState('text-animate');

    const myFuction = async() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    };
      useEffect(() => {
        myFuction();
        
      } );
      setTimeout(() => {
        
      }, 2000);
      
    return(
        <>
            <div className='contaier about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['A','b','o','u','t',' ','m','e']}
                        idx = {15}
                        />
                    </h1>
                    
                    <p>
                        I'm a curious and adaptable developer who is
                        kind of Jack of all trades and master of none.
                        I like frontend and backend Web development. I have
                        profieancy in C++/Salesforce and Machine Learning.
                        I'm actively looking forward for a core developer role
                        with opportunity to work with the latest technologies
                        on challenging and diverse projects.  

                    </p>
                    <p>
                        I'm quite confident with my skills and adaptability with corrresponding
                        to the IT needs, and perpetually working on improving my chops on one technology at a time.
            
                    </p>
                    <p>
                        If I had to define myself in one sentence that would be a 
                        friendly person, a team player, a sport fanatic,
                        and a tech geek.
                    </p>


                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color=" #DD0031"/>
                        </div>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color=" #F06529"/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color=" #28A4D9"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color=" #5ED4F4"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color=" #EFD81D"/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color=" #EC4D28"/>
                        </div>

                    </div>

                </div>

            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About