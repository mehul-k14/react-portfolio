import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/m.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';
import './index.scss';

const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e','h','u','l']
    const jobArray = ['S','F','C','C',' ','d','e','v','e','l','o','p','e','r','.']

const myFuction = async() =>{
    setTimeout(() =>{
        setLetterClass('text-animate-hover')
    },4000)
};
  useEffect(() => {
    myFuction();
    
  } );

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>    

                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>SFCC Developer/ C++</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Home