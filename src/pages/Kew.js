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
                <Subsection id='moodboard' />
                {/* <Image className='divider-img' src='/assets/images/kew/moodboard.jpg' /> */}
                <p>[Image]</p>
                <p>I chose this particular mix of photos because of their use of line. On one hand, I like the organised and industrial feel of sans-serif fonts, but I also like the warm and cosy feel of serif fonts. As you can see, a lot of my pictures on my mood board are very monochromatic, which further enforces the uniform style I mention above. However, I do like the use of colour in the Retro typography, as I am a big fan of the very bright and vibrant and vivid colours used in early electronics. A lot of the typographies that I've used create a very distinct shape. For instance, I like how the green Exit uses a running stickman as the I.</p>
                <Subsection id='rip-typography-experiment' />
                <p>[Image]</p>
                <p>I chose the word RIP, as I thought I could use it many interesting ways. Although I like the final outcome, I think I could have gone with the more cartoony style in the top right. I like the cartoony style due to its bold outlines, and very vibrant colours, which give a very unique look. My final RIP didn’t appear as vibrant as I’d hoped, and this could have been fixed by using Copics or similar, instead of penicils</p>
                <Section id='phil-baines' >
                    <p>Phil Baines was born in 1958 in Kendal, Cumbria. He studied for the Roman Catholic priesthood at Ushaw College, Durham. He abandoned his studies at the start of his fourth year, and in 1981 enrolled on a foundation course at Cumbria College of Art & Design. The following year he moved to London, to study graphic design at St Martin’s School of Art. His work during this time was very experimental, and he mainly focused on typography. He took inspiration from medieval manuscripts, and he has often noted that a lot of his inspiration came from written sources, rather than graphical sources. After two further years of study at the Royal College of Art, Baines graduated. His work was featured heavily in Typography Now: The Next Wave and he contributed two typefaces to Fuse. In 1991 he returned to St Martin’s School of Art, as part-time senior lecturer in typography, and has remained there, becoming a professor in 2006</p>
                    <p>[Image]</p>
                    <p>I really like the use of colours, and how he used lines to emphasize the first letter of the word. As well as this, he uses the numbers to show the date 1985. He differentiates these numbers by making them red.</p>
                    <p>[Image]</p>
                    <p>I really like the colour yellow used, and the way he made certain bits bigger, to emphasize them. I also like how he made the H out of paragraph marks, and made it red, to further emphasize it.</p>
                    <Subsection id='artist-inspired-outcome' />
                    <p>[Image]</p>
                    <p>For my interpretation of his work, I chose his 2012 London Olympics poster. I recreated it in GIMP on my computer. TO put a twist on it, I chose to do the deaths of soldiers in WW1 in and around High Wycombe. To keep it true to the original, I added “Lest We Forget” down the side, similar to how Baines put London Olympics 2012 in his. I am very happy with how the final version turned out. You can see his original below:</p>
                    <p>[Image]</p>
                    <p>[Image]</p>
                    <p>[Image]</p>
                </Section>
                <Section id='deconstructing-the-alphabet' >
                    <p>[Image]</p>
                    <p>The contrast between the shadow of the letter G and the light shining through the cut out creates a dramatic atmosphere. The letter G is quite obvious here, but that was not necessarily my intention, it was just to deconstruct it.</p>
                    <p>[Image]</p>
                    <p>I like how the cut-out blocks some of the light from coming through the hole, turning the very geometric G into a more serif style, emphasising its shape.</p>
                    <p>[Image]</p>
                    <p>I also like how the cut-out blocks some of the light from coming through the hole, very similar to the other, but this one blocks more of the light, making the letter harder to decipher. This further deconstructs the alphabet</p>
                    <p>[Image]</p>
                    <p>I like the angle of the point of view, making the G appear very stretched on the surface of the black paper. I also like how the cut out makes a shadow on itself, creating an  interesting effect.</p>
                </Section>








            </div>
        </>
    )
}

export default Kew