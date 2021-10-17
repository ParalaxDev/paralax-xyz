import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'
import React, { useEffect } from 'react'
// import React from 'react'
import Gallery from '../components/Gallery';

import '../styles/basicStyling.scss'
import '../styles/gallery.scss'


import titleThumbnail from '../images/drbarkers.png'
import Collapseable from '../components/Collapseable';
import Section from '../components/Section';
import Index from '../components/Index';
import Image from '../components/Image';

// import pdf from '../files/unit-1-part-2.pdf';


import pdf from '../files/unit-1-part-1.pdf';

const Typography = () => {
    return (
        <>
            <ScrollingHeader title='TYPOGRAPHY' image={titleThumbnail} />
            <Index />
            <div className='text-container'>
                <Section id='typography' >
                    {/* <h1>The Brief</h1> */}
                    <p>I had not yet started this website during this project, and we instead use powerpoint. To download a PDF version of my powerpoint for this project, click <a href={pdf} download="GCSE Typography.pdf">here</a>.</p>
                </Section>
            </div>
        </>
    )
}

export default Typography