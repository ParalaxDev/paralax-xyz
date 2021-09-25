import TorusKnot from "./TorusKnot"
import '../styles/newHomepage.scss'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect, useState } from "react";
import Cursor from "./Cursor";
import SmoothScroll from "./SmoothScroll";
import Heading from "./Heading";
import ImageCard from "./ImageCard";


import test_image_1 from '../images/test_image_1.png'

const MainPage = () => {

    const [tooltip, setTooltip] = useState('scroll')

    useEffect(() => {
        smoothscroll.polyfill();
    }, [])

    // setInterval(() => {
    //     console.log(tooltip)
    // }, 100)


    return (
        <>
            <Cursor tooltip={tooltip} />
            <div className='wrapper'>
                <section id='landing-page'>
                    <TorusKnot style={{ position: 'absolute', top: '0', left: '0', overflowX: 'hidden' }} />
                    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: '100' }} /> */}
                    <div style={{ position: 'static', width: '100vw', height: '250vh', zIndex: '100' }} />
                    <Heading title='WORK' subtitle='FEATURED PROJECTS' />
                    <ImageCard image={test_image_1} number='1' title='Kew Gardens' description='GCSE Brief' />
                </section>
            </div>
        </>
    )
}

export default MainPage