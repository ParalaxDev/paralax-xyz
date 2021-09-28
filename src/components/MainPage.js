import TorusKnot from "./TorusKnot"
import '../styles/newHomepage.scss'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect, useState } from "react";
import Cursor from "./Cursor";
import SmoothScroll from "./SmoothScroll";
import Heading from "./Heading";
import ImageCard from "./ImageCard";
import Button from "./Button";


import test_image_1 from '../images/test_image_1.png'
import test_image_2 from '../images/test_image_2.png'
import test_image_3 from '../images/test_image_3.png'

const MainPage = () => {

    const [tooltip, setTooltip] = useState('click')

    useEffect(() => {
        smoothscroll.polyfill();
    }, [])

    // setInterval(() => {
    //     console.log(tooltip)
    // }, 100)

    const parentCallback = (result) => { // the callback. Use a better name
        console.log(result);
        setTooltip(result);
    };


    return (
        <>
            {/* <Cursor tooltip={tooltip} /> */}
            {/* <div className='wrapper'> */}
            <section id='landing-page'>
                <TorusKnot style={{ position: 'absolute', top: '0', left: '0', overflowX: 'hidden' }} />
            </section>
            <section id='work'>
                <Heading title='WORK' subtitle='FEATURED PROJECTS' />
                <ImageCard image={test_image_3} number='1' title='Kew Gardens Outcome 1' description='GCSE Brief' position='left' parentCallback={parentCallback} />
                <Button text='See All Projects' link='/projects' />
                <ImageCard image={test_image_1} number='2' title='Kew Gardens Outcome 2' description='GCSE Brief' position='right' parentCallback={parentCallback} />
                <ImageCard image={test_image_2} number='3' title='Kew Gardens Outcome 3' description='GCSE Brief' position='left' parentCallback={parentCallback} />
            </section>
            <section id='about'>
                <Heading title='ABOUT' subtitle='ABOUT ME' />
            </section>
            {/* </div> */}
        </>
    )
}

export default MainPage