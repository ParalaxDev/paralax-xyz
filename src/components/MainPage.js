import TorusKnot from "./TorusKnot"
import '../styles/newHomepage.scss'

const MainPage = () => {
    return (
        <div className='wrapper'>
            <h1 className='title' >PORTFOLIO</h1>
            <TorusKnot style={{ position: 'absolute', top: '0', left: '0', zIndex: -10 }} />
            <div style={{ backgroundColor: 'black', width: '100vw', height: '100vh', left: 0, top: 0, position: "absolute", zIndex: -1000 }} />
        </div>
    )
}

export default MainPage