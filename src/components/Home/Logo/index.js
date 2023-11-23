import './index.scss'
import LogoD from '../../../assets/images/letter_d.png'
import { useEffect, useRef } from 'react'



const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        


    },[])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoD} alt="D"/>
            <svg 
            >
                <g
                    className='svg-container'   
                >
                    <path
                        ref={outlineLogoRef}
                    >
                    </path>
                </g>
            </svg>
        </div>
    )
}

export default Logo