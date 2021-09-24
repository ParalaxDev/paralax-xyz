import TorusKnot from "./TorusKnot"
import '../styles/newHomepage.scss'

const MainPage = () => {
    return (
        <div className='wrapper'>
            {/* <h1>Paralax</h1> */}
            <TorusKnot style={{ position: 'absolute', top: '0', left: '0' }} />
        </div>
    )
}

export default MainPage