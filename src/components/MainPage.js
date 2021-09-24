import TorusKnot from "./TorusKnot"
import '../styles/newHomepage.scss'

const MainPage = () => {
    return (
        <div className='wrapper'>
            {/* <div className='navbar'>
                <ul href='#'>Home</ul>
                <ul href='#about me'>About Me</ul>
                <ul href='#my work'>My Work</ul>
                <ul href='#contact me'>Contact Me</ul>
            </div> */}
            {/* <h1 className='title' >Portfolio</h1> */}
            <section>
                <TorusKnot style={{ position: 'absolute', top: '0', left: '0', zIndex: -10 }} />
            </section>
            <div style={{ backgroundColor: '#0d0d0d', width: '100vw', height: '100vh', left: 0, top: 0, position: "fixed", zIndex: -1000 }} />
        </div>
    )
}

export default MainPage