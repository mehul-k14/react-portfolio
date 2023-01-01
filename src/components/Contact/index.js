import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer,Marker,Popup,TileLayer } from 'react-leaflet'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    const myFuction = async() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    };
      useEffect(() => {
        myFuction();
        
      } );

      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_exncw1h', 'template_9nnxlae', refForm.current, 'QSlQG4mSb1USK9M0N')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      } 
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I'm intrested in new opportunities related to developer/engineer role
                        .However, if you have other requests or questions,
                        don't hesitate to contact me using below from either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='top-box'>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>
                                </li>
                                <li>
                                   <input placeholder="Subject" type="text" name="subject" required/> 
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required/>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Mehul Kumar
                    <br/>
                    India,
                    <br/>
                    Naini, Allahabad, 211008<br/>
                    A.D.A. Colony<br/>
                    <span>placedownmehul@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[25.473034, 81.878357]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[25.473034, 81.878357]}>
                            <Popup>I live here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>    
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}
export default Contact