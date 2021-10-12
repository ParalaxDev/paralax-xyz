import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'

import '../styles/basicStyling.scss'

import titleThumbnail from '../images/drbarkers.png'

const DrBarkers = () => {
    return (
        <>
            <ScrollingHeader title='DR BARKERS' image={titleThumbnail} />
            <div className='content-container'>
                <section id='brief'>
                    <h1>The Brief</h1>
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>
                </section>
                <section id='statementofintent'>
                    <h1>Statement Of Intent</h1>
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>
                </section>
                <div style={{ height: '1000vh' }} />
            </div>
        </>
    )
}

export default DrBarkers