import ContourMap from '../components/ContourMap';
import '../styles/general.scss'



const Homepage = () => {

    return (
        <div style={{ overflowX: 'hidden' }}>
            <ContourMap />
            <div className='top left'>
                <h2>Portfolio</h2>
                <h2>20 — 21</h2>
            </div>
            <div className='center' >
                <h1>Paralax</h1>
            </div>
        </div>
    )
}

export default Homepage