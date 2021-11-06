import TorusKnot from "../components/TorusKnot"
import '../styles/newHomepage.scss'
import { motion } from "framer-motion";
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect, useState } from "react";
import Cursor from "../components/Cursor";
import SmoothScroll from "../components/SmoothScroll";
import Heading from "../components/Heading";
import ImageCard from "../components/ImageCard";
import Button from "../components/Button";
import '../styles/basicStyling.scss'
import { isMobile } from "react-device-detect";

import test_image_1 from '../images/test_image_1.png'
import test_image_2 from '../images/test_image_2.png'
import test_image_3 from '../images/test_image_3.png'
import drbarkers from '../images/drbarkers.png'
import TextLogo from "../components/TextLogo";



const Homepage = () => {

    const [tooltip, setTooltip] = useState('click')

    useEffect(() => {
        smoothscroll.polyfill();
    }, [])


    const parentCallback = (result) => { // the callback. Use a better name
        console.log(result);
        setTooltip(result);
    };


    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* <Cursor tooltip={tooltip} /> */}
            {/* <div className='wrapper'> */}
            <section id='landing-page'>
                {/* <TorusKnot style={{ position: 'absolute', top: '0', left: '0', overflowX: 'hidden' }} /> */}
                <TextLogo className='text-logo' />
                <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // animate={{ y: [0, 20, 0] }}
                    // transition={{ duration: 1, repeat: Infinity }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay: 2
                    }}
                    src='assets/images/icons/scroll.png' className='scroll-indicator' />
            </section>
            <section id='work' className='content-container'>
                <Heading title='WORK' subtitle='FEATURED PROJECTS' />
                <div className='image-list-center'>
                    {isMobile ? null : <Button text='See All Projects' link='/projects' />}
                    <ImageCard image={drbarkers} number='1' title='Dr Barkers' description='GCSE Brief' link='/projects/drbarkers' position='left' parentCallback={parentCallback} />
                    <ImageCard image={test_image_3} number='2' title='Kew Gardens' description='GCSE Brief' link='/projects/kew' position='right' parentCallback={parentCallback} />
                </div>
            </section>
            <section id='about' className='content-container'>
                {/* <Heading title='ABOUT' subtitle='ABOUT ME' /> */}
            </section>
            {/* </div> */}
        </div>
    )
}

export default Homepage