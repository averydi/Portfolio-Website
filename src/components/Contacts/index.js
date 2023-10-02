
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {


     return (
     <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C','o','n','t','a','c','t', ' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in a company that will help me learn as much as possible to become a better developer!
                </p>
                <div className='contact-form'>
                    
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    
                </div>
            </div>
        </div>
     </>)
} 

export default Contact
