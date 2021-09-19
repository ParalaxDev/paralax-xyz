import { useEffect, useState, useRef } from 'react'
import '../styles/homepage.scss'
import Blob1 from '../svg/Blob1'
import { useSpring, animated } from 'react-spring'
import smoothscroll from 'smoothscroll-polyfill';
import Particles from "react-tsparticles";


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const title = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const tagline = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`
const blob1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const blob2 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`


const Homepage = () => {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const [isLoaded, setIsLoaded] = useState(false)
    // const [slide, setSlide] = useState(0)



    const blobSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(-2vh)' }, delay: 1250, config: { duration: 2000 } })
    const particlesSpring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1500, config: { duration: 2500 } })
    const taglineSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(-2vh)' }, delay: 1250 })
    const titleSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(30vh)' }, delay: 50, })

    useEffect(() => {
        smoothscroll.polyfill();
        setTimeout(() => {
            setIsLoaded(true)
        }, 1400)
    }, [])


    const ScrollHandler = (e) => {
        const elRef = useRef();

        useEffect(() => {
            const el = elRef.current;
            if (el) {
                let oldScrollX = window.scrollX
                let slide = 0
                const onWheel = e => {
                    // console.log('super pog?')
                    if (e.deltaY == 0) return;
                    e.preventDefault();
                    window.scroll({
                        left: window.scrollX + Math.sign(e.deltaY) * window.innerWidth,
                        // left: window.scrollX + window.innerWidth * 5,
                        behavior: "smooth"
                    });

                    // console.log((e.deltaY) ? window.innerWidth : `-${window.innerWidth}`)

                    // console.log(el.scrollLeft + e.deltaY)
                    // el.scrollLeft += el.deltaY
                    // console.log(el.scrollLeft)
                    // console.log(window.scrollX)
                    // console.log(window.innerWidth)
                    // console.log(e.deltaY)

                };
                el.addEventListener("wheel", onWheel);

                return () => el.removeEventListener("wheel", onWheel);
            }
        }, []);
        return elRef;
    }

    const test = ScrollHandler()

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
                            <animated.h3 className='tagline' style={taglineSpring}>Computer Science <span className='bold'>//</span> Graphic Design</animated.h3>
                        </animated.div>
                    </div>
                </section>
                <section style={{ width: '100vw', height: '100vh', left: '100vw', position: 'absolute' }}>
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
                            <animated.h2 className='tagline'>I'm <span className='bold'>Will Baker</span>, a Graphic Design and Computer Science student from the UK</animated.h2>
                        </animated.div>
                    </div>
                </section>
            </div>
            <animated.div style={particlesSpring} >
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: "#fff",
                            },
                        },
                        fpsLimit: 60,
                        particles: {
                            color: {
                                value: "#dbdbdb",
                            },
                            links: {
                                color: "#c4c4c4",
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