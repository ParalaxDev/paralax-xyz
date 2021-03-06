import { useEffect, useState, useRef } from 'react'
import '../styles/homepage.scss'
import Blob1 from '../svg/Blob1'
import { useSpring, animated } from 'react-spring'
import smoothscroll from 'smoothscroll-polyfill';
import Particles, { gradient } from "react-tsparticles";
const ReactRotatingText = require('react-rotating-text');


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const title = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const tagline = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`
const blob1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const blob2 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`

const colourMap = [['#708df2', '#64ffff'], ['#f12711', '#f5af19']]

const lerp = (a, b, u) => {
    return (1 - u) * a + u * b;
};

const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


const Homepage = () => {

    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const [isLoaded, setIsLoaded] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

    const [slide, setSlide] = useState(0)

    const useThemeDetector = () => {
        const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
        const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
        const mqListener = (e => {
            setIsDarkTheme(e.matches);
        });

        useEffect(() => {
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
            darkThemeMq.addListener(mqListener);
            return () => darkThemeMq.removeListener(mqListener);
        }, []);
        return isDarkTheme;
    }

    const blobSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(-2vh)' }, delay: 1250, config: { duration: 2000 } })
    const particlesSpring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1500, config: { duration: 2500 } })
    const taglineSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(-2vh)' }, delay: 1250 })
    const titleSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(30vh)' }, delay: 50, })

    useEffect(() => {
        smoothscroll.polyfill();
        // console.log(getCurrentTheme())

        setTimeout(() => {
            setIsLoaded(true)
        }, 1400)
    }, [])

    const fade = (variable, start, end, duration) => {
        start = hexToRgb(start)
        end = hexToRgb(end)
        var interval = 10;
        var steps = duration / interval;
        var step_u = 1.0 / steps;
        var u = 0.0;
        const root = document.documentElement
        var theInterval = setInterval(function () {
            if (u >= 1.0) {
                clearInterval(theInterval);
            }
            var r = Math.round(lerp(start.r, end.r, u));
            var g = Math.round(lerp(start.g, end.g, u));
            var b = Math.round(lerp(start.b, end.b, u));
            var colorname = 'rgb(' + r + ',' + g + ',' + b + ')';
            root.style.setProperty(variable, colorname)
            u += step_u;
        }, interval);
    };


    const ScrollHandler = (e) => {
        const elRef = useRef();

        useEffect(() => {
            const el = elRef.current;
            if (el) {
                let oldScrollX = window.scrollX
                const onWheel = e => {
                    // console.log('super pog?')
                    if (e.deltaY == 0) return;
                    e.preventDefault();
                    window.scroll({
                        left: window.scrollX + Math.sign(e.deltaY) * window.innerWidth,
                        // left: window.scrollX + window.innerWidth * 5,
                        behavior: "smooth"
                    });

                    // props.history.push(`#${Math.round(window.scrollX / window.innerWidth)}`)
                    setSlide(Math.round(window.scrollX / window.innerWidth))

                    setTimeout(() => {
                        console.log(Math.round(window.scrollX / window.innerWidth))
                        window.location.href = `#${Math.round(window.scrollX / window.innerWidth)}`
                    }, 200)

                    // console.log(Math.floor(window.scrollX / window.innerWidth))

                    const root = document.documentElement;




                    // console.log(gradient1, gradient2)

                    // console.log(isDarkTheme)



                    // console.log((e.deltaY) ? window.innerWidth : `-${window.innerWidth}`)

                    // console.log(el.scrollLeft + e.deltaY)
                    // el.scrollLeft += el.deltaY
                    // console.log(el.scrollLeft)
                    // console.log(window.scrollX)
                    // console.log(window.innerWidth)
                    // console.log(e.deltaY)
                    setTimeout(() => {

                        // console.log(window.scrollX / window.innerWidth)
                        const gradient1 = colourMap[slide][0]
                        const gradient2 = colourMap[slide][1]

                        // root.style.setProperty('--gradientColour1', gradient1)
                        // root.style.setProperty('--gradientColour2', gradient2)

                        // fade('--gradientColour1', colourMap[0][0], colourMap[1][0])
                        // fade('--gradientColour2', colourMap[0][1], colourMap[1][1])




                    }, 20)

                };
                el.addEventListener("wheel", onWheel);

                return () => el.removeEventListener("wheel", onWheel);
            }
        }, []);
        return elRef;
    }

    const test = ScrollHandler()


    useEffect(() => {


    })


    return (
        <div style={{ height: '100vh', width: '200vw', overflow: 'auto' }} ref={test}>
            {/* // <div> */}
            <div id='wrapper' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <section className="landing-container" style={isLoaded ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }} >
                    <animated.div className={`blob-container`} style={blobSpring}>
                        <animated.div style={{ transform: props.xy.to(blob1) }}>
                            <Blob1 className='blob top-right' />
                        </animated.div>
                        <animated.div style={{ transform: props.xy.to(blob2) }}>
                            <Blob1 className='blob bottom-left' />
                        </animated.div>
                    </animated.div>
                    <div className='title-container'>
                        <animated.div style={{ transform: props.xy.to(title) }} >
                            <animated.h1 className='title' style={titleSpring}>Paralax.</animated.h1>
                        </animated.div>
                        <animated.div style={{ transform: props.xy.to(tagline) }} >
                            {/* <animated.h3 className='tagline' style={taglineSpring}><span className='bold'>{slide}</span></animated.h3> */}
                        </animated.div>
                    </div>
                </section>
                <section style={{ width: '100vw', height: '100vh', left: '100vw', position: 'absolute', overflow: 'hidden' }}>
                    <animated.div className={`blob-container`} style={blobSpring}>
                        <animated.div style={{ transform: props.xy.to(blob1) }}>
                            <Blob1 className='blob bottom-right' />
                        </animated.div>
                    </animated.div>

                    <div className={'title-container'}>
                        <animated.div style={{ transform: props.xy.to(title) }} >
                            <animated.h1 className='title'>About Me</animated.h1>
                        </animated.div>
                        <animated.div style={{ transform: props.xy.to(tagline) }} >
                            <animated.h2 className='tagline' style={{ width: '50vw', textAlign: 'center' }}>I'm <span className='bold'>Will Baker</span>, a Graphic Design and Computer Science student from the UK. I have experience in React, HTML, CSS, JS, Node, C#, Python</animated.h2>
                            {/* <animated.h3 className='tagline' style={taglineSpring}><span className='bold'>{slide}</span></animated.h3> */}
                        </animated.div>
                    </div>

                </section>
            </div>
            <animated.div style={particlesSpring} >
                <Particles
                    style={{ pointerEvents: 'none', overflow: 'hidden' }}
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: !useThemeDetector() ? '#fff' : '#333',
                                // value: '#fff'
                            },
                        },
                        fpsLimit: 60,
                        particles: {
                            color: {
                                value: !useThemeDetector() ? "#dbdbdb" : '#616161',
                                // value: ,
                            },
                            links: {
                                color: !useThemeDetector() ? "#c4c4c4" : '#4f4f4f',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 2,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 1400,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </animated.div>
        </div >
    )
}

export default Homepage