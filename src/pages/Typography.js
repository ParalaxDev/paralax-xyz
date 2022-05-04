import ScrollingHeader from '../components/ScrollingHeader'
// import Heading from '../components/Heading'
import React, { useEffect } from 'react'
// import React from 'react'
// import Gallery from '../components/Gallery';

import '../styles/basicStyling.scss'
import '../styles/gallery.scss'


import titleThumbnail from '../images/drbarkers.png'
// import Collapseable from '../components/Collapseable';
import Section from '../components/Section';
import Index from '../components/Index';
import Image from '../components/Image';
import Subsection from '../components/Subsection';
import Spacer from '../components/Spacer'
import Gallery from '../components/Gallery';

// import pdf from '../files/unit-1-part-2.pdf';


// import pdf from '../files/unit-1-part-1.pdf';

const originalPaulThurlby = ['/assets/images/typography/paul-thurlby/originals/image29.jpg', '/assets/images/typography/paul-thurlby/originals/image30.jpeg', '/assets/images/typography/paul-thurlby/originals/image31.jpg', '/assets/images/typography/paul-thurlby/originals/image32.jpg', '/assets/images/typography/paul-thurlby/originals/image33.jpg', '/assets/images/typography/paul-thurlby/originals/image34.jpg', '/assets/images/typography/paul-thurlby/originals/image35.jpg', '/assets/images/typography/paul-thurlby/originals/image36.jpg', '/assets/images/typography/paul-thurlby/originals/image37.jpeg', '/assets/images/typography/paul-thurlby/originals/image38.jpeg']

const Typography = () => {
    return (
        <>
            <ScrollingHeader title='TYPOGRAPHY' image={titleThumbnail} />
            <div className='text-container'>
                <p>This is an adapted version of my original powerpoint. To view this in its original form, you can download a PDF from <a href="/assets/files/GCSE Portfolio Unit 1 Part 1.pdf" target="_blank">here</a></p>
                <Subsection id='moodboard' />
                {/* <Image className='divider-img' src='/assets/images/kew/moodboard.jpg' /> */}
                <Image className='divider-img' src='https://i.ibb.co/XXPn4Xn/20211027-170943.jpg' />

                <p>I chose this particular mix of photos because of their use of line. On one hand, I like the organised and industrial feel of sans-serif fonts, but I also like the warm and cosy feel of serif fonts. As you can see, a lot of my pictures on my mood board are very monochromatic, which further enforces the uniform style I mention above. However, I do like the use of colour in the Retro typography, as I am a big fan of the very bright and vibrant and vivid colours used in early electronics. A lot of the typographies that I've used create a very distinct shape. For instance, I like how the green Exit uses a running stickman as the I.</p>
                <Subsection id='rip-typography-experiment' />
                <Image className='divider-img' src='https://i.ibb.co/Kz2837W/20211027-170955.jpg' />
                <p>I chose the word RIP, as I thought I could use it many interesting ways. Although I like the final outcome, I think I could have gone with the more cartoony style in the top right. I like the cartoony style due to its bold outlines, and very vibrant colours, which give a very unique look. My final RIP didn’t appear as vibrant as I’d hoped, and this could have been fixed by using Copics or similar, instead of penicils</p>
                <Section id='phil-baines' >
                    <p>Phil Baines was born in 1958 in Kendal, Cumbria. He studied for the Roman Catholic priesthood at Ushaw College, Durham. He abandoned his studies at the start of his fourth year, and in 1981 enrolled on a foundation course at Cumbria College of Art & Design. The following year he moved to London, to study graphic design at St Martin’s School of Art. His work during this time was very experimental, and he mainly focused on typography. He took inspiration from medieval manuscripts, and he has often noted that a lot of his inspiration came from written sources, rather than graphical sources. After two further years of study at the Royal College of Art, Baines graduated. His work was featured heavily in Typography Now: The Next Wave and he contributed two typefaces to Fuse. In 1991 he returned to St Martin’s School of Art, as part-time senior lecturer in typography, and has remained there, becoming a professor in 2006</p>
                    <Image className='right content-img' src='https://farm9.staticflickr.com/8186/8138907261_368cc37e68.jpg' />
                    <Image className='inline content-img' src='https://64.media.tumblr.com/0042c0a6f4c85eacc93baecf72799b5d/tumblr_mqwn6oJYuJ1qi4z1yo2_1280.jpg' />
                    <p>I really like the colour yellow used, and the way he made certain bits bigger, to emphasize them. I also like how he made the H out of paragraph marks, and made it red, to further emphasize it.</p>
                    <p>I really like the use of colours, and how he used lines to emphasize the first letter of the word. As well as this, he uses the numbers to show the date 1985. He differentiates these numbers by making them red.</p>
                    <Subsection id='artist-inspired-outcome' />
                    <Image className='inline content-img' src='https://i.ibb.co/6rLYr12/Picture3.png' />
                    <Image className='right content-img' src='https://i.pinimg.com/originals/42/e8/86/42e886e3a13ac54b503Dd88e87c4ce6f.jpg' />
                    <Spacer />
                    <Spacer />
                    <p >For my interpretation of his work, I chose his 2012 London Olympics poster. I recreated it in GIMP on my computer. To put a twist on it, I chose to do the deaths of soldiers in WW1 in and around High Wycombe. To keep it true to the original, I added “Lest We Forget” down the side, similar to how Baines put London Olympics 2012 in his. I am very happy with how the final version turned out. You can see his original above</p>
                </Section>
                <Section id='deconstructing-the-alphabet' >
                    {/* https://i.ibb.co/MPD7TV8/20200923-094922.jpg
                    https://i.ibb.co/JH7dqFZ/20200923-094924.jpg
                    https://i.ibb.co/2KX2hGV/20200923-095330.jpg
                    https://i.ibb.co/fG5Yfnq/20200923-095359.jpg */}
                    <Subsection id='shadow-typography' />
                    {/* <p>[Image]</p> */}
                    <Image className='inline content-img' src='https://i.ibb.co/fG5Yfnq/20200923-095359.jpg' />
                    {/* <p>[Image]</p> */}
                    <Image className='left content-img' src='https://i.ibb.co/JH7dqFZ/20200923-094924.jpg' />
                    <Image className='left content-img' src='https://i.ibb.co/2KX2hGV/20200923-095330.jpg' />
                    <Image className='inline content-img' src='https://i.ibb.co/MPD7TV8/20200923-094922.jpg' />

                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />

                    <p><span style={{ color: 'GrayText' }}>1. </span>The contrast between the shadow of the letter G and the light shining through the cut out creates a dramatic atmosphere. The letter G is quite obvious here, but that was not necessarily my intention, it was just to deconstruct it.</p>
                    <p><span style={{ color: 'GrayText' }}>2. </span>I like how the cut-out blocks some of the light from coming through the hole, turning the very geometric G into a more serif style, emphasising its shape.</p>
                    {/* <p>[Image]</p> */}
                    <p> <span style={{ color: 'GrayText' }}>3. </span>I also like how the cut-out blocks some of the light from coming through the hole, very similar to the other, but this one blocks more of the light, making the letter harder to decipher. This further deconstructs the alphabet</p>
                    {
                        /* <p>[Image]</p> */}
                    <p> <span style={{ color: 'GrayText' }}>4. </span>I like the angle of the point of view, making the G appear very stretched on the surface of the black paper. I also like how the cut out makes a shadow on itself, creating an  interesting effect.</p>
                    <Subsection id='ripped-typography' />
                    <Image className='inline content-img' style={{paddingRight: '20px'}} src='/assets/images/typography/ripped/2.jpg' />
                    <Image className='inline content-img' src='/assets/images/typography/ripped/1.jpg' />
                    <p><span style={{ color: 'GrayText' }}>1. </span>To deconstruct the alphabet further, I have broken up the letters, disrupting the flow with sharp lines. I have also left gaps between the lines, adding texture to the monochromatic piece. The different tone of the paper beneath also adds to the piece. I also like how simplistic it is, with only black and white, creating a bold look.</p>
                    <p><span style={{ color: 'GrayText' }}>2. </span>For this piece, I have further broken up the letters, allowing them to read. It also makes the audience think more about what they are reading, as they must decipher it. Once again, the black and white creates a bold and interesting look, making it visually appealing to the eye.</p>
                    
                    
                    <Image className='inline content-img' style={{paddingRight: '20px'}} src='/assets/images/typography/ripped/3.png' />
                    <Image className='inline content-img' src='/assets/images/typography/ripped/5.png' />
                    <p><span style={{ color: 'GrayText' }}>3. </span>The ripped pieces of paper which I have stuck back down creates an interesting fade between the segments, adding texture to the piece. As well as this, it makes it look almost 3D, adding a bit of depth to it. There is some space between the segments, breaking up the mayhem of the letters with the still black paper.</p>
                    
 
                    <p><span style={{ color: 'GrayText' }}>4. </span>The curls which I then stuck down created a striking image, adding a very outstanding essence of depth to the scene. The way the curls are different heights also adds a sense of randomness to the piece, the same way the tears in the letters do. </p>
                    <Image className='left content-img' src='/assets/images/typography/ripped/4.jpeg' />
                    <p>The accordion of paper created an interesting look when 3D, adding depth to the piece. It also created a shadow on the troughs, creating an appeasing look. When read from an angle, it reads in an odd way, skipping some lines, deconstructing the alphabet further. When read form above, it appears like the letters are squished, further deconstructing the alphabet.</p>
                    <Spacer h={30} />
                    <Subsection id='3d-typography' />
                    <p>For these next images, I designed and 3D printed a series of optical illusions using the 3D printer that I have at home. I wanted to incorporate my love for technical engineering and design with my love for graphic design.</p>
                    <Image className='divider-img' src='/assets/images/typography/3d/1.jpeg' />
                    <p>I really like this picture because of the illusion it creates. When you look at it from one angle, it creates a W. However, from another angle if creates a B. This creates an interesting shape, making the audience want to figure out more. I used a very rigid font, to create an evocative impact, which is further depicted by the monochromatic atmosphere it creates. The white paper in the background creates subtle texture, to make the picture more visually appeasing, but it doesn’t detract from the main element.</p>
                    <Image className='divider-img' src='/assets/images/typography/3d/4.jpeg' />
                    <p>This picture is very similar to the last one, but in some ways, I prefer it. There is a bigger contrast between the letters and the background, making it stand out more. You can also see the print lines on it, creating an interesting texture on the actual letters.</p>
                    <Image className='divider-img' src='/assets/images/typography/3d/2.jpeg' />
                    <Image className='divider-img' src='/assets/images/typography/3d/3.jpeg' />
                    <p>For these two, I expanded on the optical illusion part, but instead of spelling two letters, it spells out two words. In this case, I chose Love and Hate as the words. I used a colourful backdrop for them, which I tried to link with the word. For instance, for me, hate has connotations of red. The paper doesn’t have that much of a texture to it, but it still has enough without making boring and plain.</p>
                </Section>
                <Section id='paul-thurlby' >
                    <p>Paul Thurlby is a London based illustrator and has been an illustrator for the Guardian since 2006. He has worked for many famous clients including Vanity Fair and The New Yorker. One of his most notable works was the Alphabet Book, where he wanted to recreate the familiar book. It has many good reviews, describing it as "Highly Collectable", and describe Paul as a "Unique Artist". The book originally started out as a collection of limited-edition prints, however, it was turned into a hardback book which has been published from the USA, Australia and the UK.</p>
                    <Image className='inline content-img' style={{paddingRight: '20px'}} src='/assets/images/typography/paul-thurlby/research/2.png' />
                    {/* <Spacer h={30} /> */}
                    <Image className='inline content-img' src='/assets/images/typography/paul-thurlby/research/1.jpeg' />
                    <p><span style={{ color: 'GrayText' }}>1. </span>I really like the pastel colours used in this piece. It gives it a very serene and relaxing feel to it. Thurlby also uses a very limited colour palette, adding a simplicity to the piece. There are a few spots of yellow on people’s clothes, and on bags. This makes them stand out against the otherwise very cold colours. The viewpoint is very skewed, with the car and the crossing looking very out of place. This enforces the hand drawn style Thurlby has.</p>
                    <p><span style={{ color: 'GrayText' }}>2. </span>I really like this piece by Thurlby, partly due to the very vibrant colours he’s used. The greens create a very appealing atmosphere, making the poster very fun. I like the line work used in the title, turning the very bold and industrial font, into a more playful version. The hand drawn aspect to the painting also gives it a playful look.</p>
                    {/* <Spacer h={30} /> */}
                    <Subsection id='paul-thurlby--artist-inspired-outcome' />
                    <p>I chose to create a similar piece to his Alphabet book. To recreate this, we went out around the school, and took pictures of items that looked like letters. I then edited some of my favourites on my iPad to print. Here are some of the originals:</p>
                    <Gallery imgs={originalPaulThurlby}/>
                    <p>I then took them into Photoshop to edit them into a more colourful and playful style, similar to Paul Thurlby’s</p>

                    <Image className='inline content-img' style={{paddingRight: '20px'}} src='/assets/images/typography/paul-thurlby/edited/image39.png' />
                    <Image className='inline content-img' src='/assets/images/typography/paul-thurlby/edited/image40.png' />
                    <p><span style={{ color: 'GrayText' }}>1. </span>For this letter, I started off by flipping the image, then rotating and scaling it, to fit the canvas. I then edited the vibrance of it, to make it stand out more, then added a hue saturation modifier to it, to change up the colours.</p>
                    <p><span style={{ color: 'GrayText' }}>2. </span>For this letter, I started off by adding a purple pattern in the background. I did this to try an emulate the grainy texture found on Thurlby’s Alphabet. I then used basic modifiers such as vibrance and contrast, to make it pop more.</p>

                    <Image className='inline content-img' style={{paddingRight: '20px'}} src='/assets/images/typography/paul-thurlby/edited/image41.png' />
                    <Image className='inline content-img' src='/assets/images/typography/paul-thurlby/edited/image42.png' />
                    <p><span style={{ color: 'GrayText' }}>3. </span>For this letter, I started off I started off by adding a hue saturation layer, making it green. I then added a gradient map on top of it. I then edited the gradient map to give the effect you see.</p>

                    <p><span style={{ color: 'GrayText' }}>4. </span>For this letter, I added a gradient on top of it, and changed the opacity on it, adding an overlay to it. I then added a noise pattern, and changed the opacity to created a grainy effect, like in many of Thurlby’s Alphabet.</p>

                    <Image className='left content-img' src='/assets/images/typography/paul-thurlby/edited/image43.png' />
                    <p>For this letter I first removed some leaves and other debris from the image. I then added a gradient to it, then hue shifting it to a colour I liked. This emulates Thurlby’s images which had a very saturated and colourful look to them.</p>
                    <Spacer h={50} />
                    <h2>Process Example</h2>
                    <p>For this letter, I started off by cutting out the foreground of the picture and moving it to a new layer. I then shifted the hue of the background to create the orange sky. I then added some basic image effects to enhance the image.</p>
                    <Image className='threexline content-img' src='/assets/images/typography/paul-thurlby/processes/image45.png' />
                    <Image className='threexline content-img' src='/assets/images/typography/paul-thurlby/processes/image46.png' />
                    <Image className='threexline content-img' src='/assets/images/typography/paul-thurlby/processes/image47.png' />
                    {/* <Spacer h={52} /> */}
                </Section>
                <Section id='book-and-poster' >
                    <p>The brief stated that we were to create a book and poster for an upcoming book called the deconstructed alphabet. When I was first saw the brief, I wanted to create a flat, sleek looking book cover, similar to the ones below. I was trying to recreate the “Think outside the box” cover as seen below in Adobe Illustrator. You can also see my iterations on the design below. However, I later settled on reusing some of my typography from the Ripped Typography workshop we did and editing it in Adobe Photoshop</p>

                    <Image className='inline content-img' src='/assets/images/typography/book-poster/image51.png' />
                    <Image className='right content-img' src='/assets/images/typography/book-poster/image53.png' />
                    <Image className='inline content-img' src='/assets/images/typography/book-poster/image50.jpg' />
                    <Image className='right content-img' src='/assets/images/typography/book-poster/image52.jpeg' />

                    <p>I started off by removing all the black card behind the image, leaving me with just the white parts. I then placed a blue background behind it, to create contrast between the letters, and to make it more appealing to the eye. I then placed a translucent grey background between the text and the letters to create contrast between them. I then experimented with giving the text a drop shadow, but later decided against it. I then hue shifted the blue into an orange as I thought it looked better. To create a 3D book effect as seen in many of the book posters I had on my moodboard, I modelled a quick book in Blender, and UV wrapped the front cover onto it, as well as a page texture I found online.</p>
                    <Image className='left content-img' src='/assets/images/typography/book-poster/book-processes/image55.png' />
                    {/* <Spacer h={16} /> */}
                    <div style={{marginTop: '25px'}}>
                        <Image className='line content-img' src='/assets/images/typography/book-poster/book-processes/image56.png' />
                        <Image className='line content-img' src='/assets/images/typography/book-poster/book-processes/image57.png' />
                        <Image className='line content-img' src='/assets/images/typography/book-poster/book-processes/image58.png' />
                        <Image className='line content-img' src='/assets/images/typography/book-poster/book-processes/image59.png' />
                    </div>
                    <p>For the poster, I took the 3D book and put it into GIMP to edit it into a poster. I started off by creating the footer at the bottom by using other parts of the ripped typography to give the poster some texture. I then created the stars, and aligned them and the names to the poster. I then added the title, and the coming soon text</p>
                    <Subsection id='book-and-poster--final-outcome' />
                    <Image className='divider-img' src='/assets/images/typography/book-poster/image62.png' />
                    <Image className='divider-img' src='/assets/images/typography/book-poster/image61.png' />

                
                </Section>








            </div>
        </>
    )

}

export default Typography