import './index.scss'
import LogoD from '../../../assets/images/letter_d.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 10,
            opacity: .35,
        })
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