import '../styles/generalStyles.scss'
// import '../../public/projects'
// import pdf from '../files/unit-1-part-2';
import pdf from '../files/unit-1-part-2.pdf';




const Kew = () => {
    return (
        <div className='notion-styles'>
            <article id="70af8991-71b4-4767-aaef-4880e19f9b1f" className="page sans">
                <header>
                    <img className="page-cover-image" src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb" style={{ objectPosition: ' center 50%' }} />
                    <div className="page-header-icon page-header-icon-with-cover">
                        <span className="icon">🌵</span>
                    </div>
                    <h1 className="page-title">Kew Gardens</h1>
                </header>
                <div className="page-body">
                    <p id="f99513d0-ead3-4783-9388-76b080d911e9" className="">
                        To download a PDF of my portfolio for this project, click <a href={pdf} download="GCSE Kew Portfolio.pdf">here</a>
                    </p>
                    <p id="a560dcb4-76cd-4a24-a282-156183d4d4d7" className="">
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Kew