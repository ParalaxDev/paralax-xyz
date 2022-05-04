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
            <section id='landing-page'>
                <TextLogo className='text-logo' />
                <a href='#work' className='scroll-indicator'>
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className='arrow'
                        whileHover={{ y: -20 }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 20,
                            delay: 2
                        }}
                        src='assets/images/icons/scroll.png' />
                </a>
            </section>
            <section id='work' className='content-container'>
                <Heading title='WORK' subtitle='FEATURED PROJECTS' />
                <div className='image-list-center'>
                    <ImageCard image={drbarkers} number='1' title='Dr Barkers' description='GCSE Brief' link='/projects/drbarkers' position='left' parentCallback={parentCallback} />
                    <ImageCard image={test_image_3} number='2' title='Kew Gardens' description='GCSE Brief' link='/projects/kew' position='right' parentCallback={parentCallback} />
                    <ImageCard image='/assets/images/typography/ripped/1.jpg' number='3' title='Typography' description='GCSE Workshop' link='/projects/typography' position='left' parentCallback={parentCallback} />
                </div>
            </section>
            <section id='about' className='content-container'>
            </section>
            <section id='footer' className='content-container'>
                <p><center>This website was made my me. You can view everything about it <a href="/assets/files/Paralax.xyz.pdf" target="_blank">here</a></center></p>
            </section>
        </div>
    )
}

export default Homepage