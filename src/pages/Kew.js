import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'
import React, { useEffect } from 'react'
// import React from 'react'
import Gallery from '../components/Gallery';
import Subsection from '../components/Subsection'

import '../styles/basicStyling.scss'
import '../styles/gallery.scss'


import titleThumbnail from '../images/drbarkers.png'
import Collapseable from '../components/Collapseable';
import Section from '../components/Section';
import Index from '../components/Index';
import Image from '../components/Image';

import pdf from '../files/unit-1-part-2.pdf';





const Kew = () => {
    return (
        <>
            <ScrollingHeader title='KEW' image={titleThumbnail} />
            <div className='text-container'>
            <p>This is an adapted version of my original powerpoint. To view this in its original form, you can download a PDF form <a href="/assets/files/GCSE Portfolio Unit 1 Part 2.pdf" target="_blank">here</a></p>








            </div>
        </>
    )
}

export default Kew