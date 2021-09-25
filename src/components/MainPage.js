import TorusKnot from "./TorusKnot"
import '../styles/newHomepage.scss'
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from "react";
import Cursor from "./Cursor";

const MainPage = () => {

    useEffect(() => {
        smoothscroll.polyfill();
    }, [])


    return (
        <div className='wrapper'>
            {/* <div className='navbar'>
                <ul href='#'>Home</ul>
                <ul href='#about me'>About Me</ul>
                <ul href='#my work'>My Work</ul>
                <ul href='#contact me'>Contact Me</ul>
            </div> */}
            {/* <h1 className='title' >Portfolio</h1> */}
            <Cursor text='Scroll For More' />
            <section id='landing-page'>
                <TorusKnot style={{ position: 'fixed', top: '0', left: '0', zIndex: 10 }} />
            </section>
            <div className='spacer' />
            {/* <div style={{ backgroundColor: '#0d0d0d', width: '100vw', height: '100vh', left: 0, top: 0, position: "fixed", zIndex: -1000 }} /> */}
        </div>
    )
}

export default MainPage