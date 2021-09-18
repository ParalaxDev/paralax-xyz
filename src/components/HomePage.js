import { useEffect, useState } from 'react'
import '../styles/homepage.scss'
import Blob1 from '../svg/Blob1'

const Homepage = () => {

    const [title, setTitle] = useState('P.')
    const [blobStates, setBlobStates] = useState('hidden')
    const [taglineState, setTaglineState] = useState('hidden')

    useEffect(() => {
        loadingAnimation()
    }, [])

    const loadingAnimation = () => {

        setTimeout(() => {
            setTitle('Paralax.')
            console.log('aniamtion plays')
        }, 1500)

        setTimeout(() => {
            setTaglineState('fade-in-top')
        }, 2000)

        setTimeout(() => {
            setBlobStates('fade-in-top')
        }, 2500)
    }

    return (
        <>
            <div className={`blob-container ${blobStates}`}>
                <Blob1 className='blob top-right' />
                <Blob1 className='blob bottom-left' />
            </div>
            <div className='title-container'>
                <h1 className='title fade-in-bottom'>{title}</h1>
                <h3 className={`tagline ${taglineState}`}>Computer Science <span className='bold'>//</span> Graphic Design</h3>
            </div>
        </>
    )
}

export default Homepage