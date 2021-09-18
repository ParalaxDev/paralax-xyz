import '../styles/homepage.scss'
import Blob1 from '../svg/Blob1'

const Homepage = () => {

    return (
        <>
            <div className='blob-container'>
                <Blob1 className='blob top-right' />
                <Blob1 className='blob bottom-left' />
            </div>
            <div className='title-container'>
                <h1 className='title'>Paralax.</h1>
                <h3 className='tagline'>Computer Science <span className='bold'>//</span> Graphic Design</h3>
            </div>
        </>
    )
}

export default Homepage