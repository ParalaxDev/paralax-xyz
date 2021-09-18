import { useEffect, useState } from 'react'
import '../styles/homepage.scss'
import Blob1 from '../svg/Blob1'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const blob1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`
const blob2 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

const Homepage = () => {

    const [title, setTitle] = useState('P.')
    const [titleSplit, setTitleSplit] = useState(['P', '.'])
    const [blobStates, setBlobStates] = useState('hidden')
    const [taglineState, setTaglineState] = useState('hidden')
    const [isLoading, setIsLoading] = useState(true)

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))



    const blobSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(-2vh)' }, delay: 1250, config: { duration: 2000 } })
    const taglineSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(-2vh)' }, delay: 1250 })
    const titleSpring = useSpring({ to: { opacity: 1, transform: 'translateY(0vh)' }, from: { opacity: 0, transform: 'translateY(30vh)' }, delay: 50, })


    return (
        <>
            <div class="parallax-handler" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
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
                    <animated.h1 className='title' style={titleSpring}>Paralax.</animated.h1>

                    <animated.h3 className='tagline' style={taglineSpring}>Computer Science <span className='bold'>//</span> Graphic Design</animated.h3>
                </div>
            </div>
        </>
    )
}

export default Homepage