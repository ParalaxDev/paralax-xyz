import ContourMap from '../components/ContourMap';
import '../styles/general.scss'
import '../styles/homepage.scss'



const Homepage = () => {

    return (
        <>
            <div className='contourmap-overlay' />
            <ContourMap className='contour-map' />
            <div className='top left absolute'>
                <h2>Portfolio</h2>
                <h2>20 — 21</h2>
            </div>
            <div className='center' >
                <h1>Paralax</h1>
            </div>
        </>
    )
}

export default Homepage