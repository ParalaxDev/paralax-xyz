import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'
import React from 'react'
import Gallery from '../components/Gallery';

import '../styles/basicStyling.scss'
import '../styles/gallery.scss'



import titleThumbnail from '../images/drbarkers.png'



const DrBarkers = () => {
    return (
        <>
            {/* <img src={titleThumbnail} style={{ width: '20vw' }} /> */}
            <ScrollingHeader title='DR BARKERS' image={titleThumbnail} />
            <div style={{ height: '40vh' }} />
            <div className='text-container'>
                <section id='brief'>
                    <h1>The Brief</h1>
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>
                </section>
                <section id='statementofintent'>
                    <h1>Statement Of Intent</h1>
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>
                </section>
                <section id='moodboard'>
                    <h1>Moodboard</h1>
                    <p>For my moodboard, I created a Pinterest board full of ideas and styles that I love, and want to introduce into my final outcomes. I especially love the very simple and flat illustrated styles, more specifically from the artist <a href='https://georgetonks.com/'>George Tonks</a>.</p>
                    <Gallery rows={4} />
                </section>
                <div style={{ height: '1000vh' }} />
            </div>
        </>
    )
}

export default DrBarkers