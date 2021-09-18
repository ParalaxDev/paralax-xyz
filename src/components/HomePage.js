import { useEffect, useState, useRef } from 'react'
import '../styles/homepage.scss'
import Blob1 from '../svg/Blob1'
import { useSpring, animated } from 'react-spring'
import smoothscroll from 'smoothscroll-polyfill';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const title = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const tagline = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`
const blob1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const blob2 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`

const Homepage = () => {

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    const [isLoaded, setIsLoaded] = useState(false)


    const blobSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(-2vh)' }, delay: 1250, config: { duration: 2000 } })
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
            console.log('pog?')
            const el = elRef.current;
            if (el) {
                const onWheel = e => {
                    // console.log('super pog?')
                    if (e.deltaY == 0) return;
                    e.preventDefault();
                    window.scroll({
                        left: window.scrollX + e.deltaY,
                        behavior: "smooth"
                    });

                    // console.log(el.scrollLeft + e.deltaY)
                    el.scrollLeft += el.deltaY
                    // console.log(el.scrollLeft)
                    console.log(window.scrollX)

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
            <div id='wrapper' >
                <section className="landing-container" style={isLoaded ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.div className={`blob-container`} style={blobSpring}>
                        <animated.div style={{ transform: props.xy.to(blob1) }}>
                            <Blob1 className='blob top-right' />
                        </animated.div>
                        <animated.div style={{ transform: props.xy.to(blob2) }}>
                            <Blob1 className='blob bottom-left' />
                        </animated.div>
                    </animated.div>
                    <div className='title-container'>
                        {/* <Title className='title fade-in-bottom' /> */}
                        {/* {titleSplit.map((letter, i) => {
                    return <span className='title fade-in-bottom' key={letter.id}>{letter}</span>

                })} */}
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
                </section>
            </div>
        </div >
    )
}

export default Homepage