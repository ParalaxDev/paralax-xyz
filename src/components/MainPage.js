import TorusKnot from "./TorusKnot"
import '../styles/newHomepage.scss'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from "react";
import Cursor from "./Cursor";
import SmoothScroll from "./SmoothScroll";
import Subheading from "./Subheading";

const MainPage = () => {

    useEffect(() => {
        smoothscroll.polyfill();
    }, [])


    return (
        <>
            {/* <SmoothScroll> */}
            <Cursor />
            <div className='wrapper'>
                {/* <div className='navbar'>
                <ul href='#'>Home</ul>
                <ul href='#about me'>About Me</ul>
                <ul href='#my work'>My Work</ul>
                <ul href='#contact me'>Contact Me</ul>
            </div> */}
                {/* <h1 className='title' >Portfolio</h1> */}
                <section id='landing-page'>
                    <TorusKnot style={{ position: 'absolute', top: '0', left: '0', zIndex: 0, overflowX: 'hidden' }} />
                    <div className='spacer' />
                    <Subheading title='WORK' />
                </section>
            </div>
            {/* </SmoothScroll> */}
        </>
    )
}

export default MainPage