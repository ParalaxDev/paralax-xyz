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
import Subsection from '../components/Subsection';

// import pdf from '../files/unit-1-part-2.pdf';


import pdf from '../files/unit-1-part-1.pdf';

const Typography = () => {
    return (
        <>
            <ScrollingHeader title='TYPOGRAPHY' image={titleThumbnail} />
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
                    <Subsection id='shadow-typography' />
                    <p>[Image]</p>
                    <p>The contrast between the shadow of the letter G and the light shining through the cut out creates a dramatic atmosphere. The letter G is quite obvious here, but that was not necessarily my intention, it was just to deconstruct it.</p>
                    <p>[Image]</p>
                    <p>I like how the cut-out blocks some of the light from coming through the hole, turning the very geometric G into a more serif style, emphasising its shape.</p>
                    <p>[Image]</p>
                    <p>I also like how the cut-out blocks some of the light from coming through the hole, very similar to the other, but this one blocks more of the light, making the letter harder to decipher. This further deconstructs the alphabet</p>
                    <p>[Image]</p>
                    <p>I like the angle of the point of view, making the G appear very stretched on the surface of the black paper. I also like how the cut out makes a shadow on itself, creating an  interesting effect.</p>
                    <Subsection id='ripped-typography' />
                    <p>[Image]</p>
                    <p>To deconstruct the alphabet further, I have broken up the letters, disrupting the flow with sharp lines. I have also left gaps between the lines, adding texture to the monochromatic piece. The different tone of the paper beneath also adds to the piece. I also like how simplistic it is, with only black and white, creating a bold look.</p>
                    <p>[Image]</p>
                    <p>For this piece, I have further broken up the letters, allowing them to read. It also makes the audience think more about what they are reading, as they must decipher it. Once again, the black and white creates a bold and interesting look, making it visually appealing to the eye.</p>
                    <p>[Image]</p>
                    <p>The ripped pieces of paper which I have stuck back down creates an interesting fade between the segments, adding texture to the piece. As well as this, it makes it look almost 3d, adding a bit of depth to it. There is some space between the segments, breaking up the mayhem of the letters with the still black paper.</p>
                    <p>[Image]</p>
                    <p>The curls which I then stuck down created a striking image, adding a very outstanding essence of depth to the scene. The way the curls are different heights also adds a sense of randomness to the piece, the same way the tears in the letters do. </p>
                    <p>[Image]</p>
                    <p>The accordion of paper created an interesting look when 3d, adding depth to the piece. It also created a shadow on the troughs, creating an appeasing look. When read from an angle, it reads in an odd way, skipping some lines, deconstructing the alphabet further. When read form above, it appears like the letters are squished, further deconstructing the alphabet.</p>
                    <Subsection id='3d-typography' />
                    <p>[Image]</p>
                    <p>I really like this picture because of the illusion it creates. When you look at it from one angle, it creates a W. However, from another angle if creates a B. This creates an interesting shape, making the audience want to figure out more. I used a very rigid font, to create an evocative impact, which is further depicted by the monochromatic atmosphere it creates. The white paper in the background creates subtle texture, to make the picture more visually appeasing, but it doesn’t detract from the main element.</p>
                    <p>[Image]</p>
                    <p>This picture is very similar to the last one, but in some ways, I prefer it. There is a bigger contrast between the letters and the background, making it stand out more. You can also see the print lines on it, creating an interesting texture on the actual letters.</p>
                    <p>[Image]</p>
                    <p>[Image]</p>
                    <p>For these two, I expanded on the optical illusion part, but instead of spelling two letters, it spells out two words. In this case, I chose Love and Hate as the words. I used a colourful backdrop for them, which I tried to link with the word. For instance, for me, hate has connotations of red. The paper doesn’t have that much of a texture to it, but it still has enough without making boring and plain.</p>
                </Section>
                <Section id='paul-thurlby' >
                    <p>Paul Thurlby is a London based illustrator and has been an illustrator for the Guardian since 2006. He has worked for many famous clients including Vanity Fair and The New Yorker. One of his most notable works was the Alphabet Book, where he wanted to recreate the familiar book. It has many good reviews, describing it as "Highly Collectable", and describe Paul as a "Unique Artist". The book originally started out as a collection of limited-edition prints, however, it was turned into a hardback book which has been published from the USA, Australia and the UK.</p>
                    <p>[Image]</p>
                    <p>I really like the pastel colours used in this piece. It gives it a very serene and relaxing feel to it. Thurlby also uses a very limited colour palette, adding a simplicity to the piece. There are a few spots of yellow on people’s clothes, and on bags. This makes them stand out against the otherwise very cold colours. The viewpoint is very skewed, with the car and the crossing looking very out of place. This enforces the hand drawn style Thurlby has.</p>
                    <p>[Image]</p>
                    <p>I really like this piece by Thurlby, partly due to the very vibrant colours he’s used. The greens create a very appealing atmosphere, making the poster very fun. I like the line work used in the title, turning the very bold and industrial font, into a more playful version. The hand drawn aspect to the painting also gives it a playful look.</p>
                    <Subsection id='inspired-outcome' />
                    <p>[Gallery]</p>







                </Section>








            </div>
        </>
    )

}

export default Typography