import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/letter_d.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo'
import SWprj from '../../assets/images/SWprj.png'
import CryptoTart from '../../assets/images/crypto.png'

const Home = () => {

    
    const [letterClass] = useState('text-animate')
    const nameArray = ['a','v','i','d']
    const jobArray = ['s','o','f','t','w','a','r','e',' ', 'd','e','v','e','l','o','p','e','r', '.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>    
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer' />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} />
                </h1>
                <h2>Recent Projects</h2>
                <div className='portfolio-section-container'>
                    
                        <div className='portfolio-section-card'>
                            <a target="_blank" rel='noreferrer' href='https://github.com/averydi/Miami-50-Crypto-Group-Project-React-Flask'>
                                <h3 className='portfolio-section-title'>Crypto Tart App</h3>
                                        <div className='portfolio-section-img'>
                                                <img src={CryptoTart} alt='Placeholder' />
                                        </div>
                            </a>            
                            <div className='portfolio-section-card-content'>
                                <div>
                                    <p className='text-md'>This a a group project that is a Crypto Currency web app.</p>
                                </div>
                                <p className='text-sm-portfolio-link'></p>
                            </div>
                        </div>

                        <div className='portfolio-section-card'>
                            <a target="_blank" rel='noreferrer' href='https://github.com/4GeeksAcademy/averydi-Star-Wars-Blog-Post'>
                                <h3 className='portfolio-section-title'>Star Wars API's</h3>
                                        <div className='portfolio-section-img'>
                                                <img src={SWprj} alt='Placeholder' />
                                        </div>
                            </a>            
                            <div className='portfolio-section-card-content'>
                                <div>
                                    <p className='text-md'>This is a project that utilizes Star Wars API's and allows user to select favorites</p>
                                </div>
                                <p className='text-sm-portfolio-link'></p>
                            </div>
                        </div>
                </div>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home
