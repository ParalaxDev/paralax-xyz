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
import Spacer from '../components/Spacer'

import pdf from '../files/unit-1-part-2.pdf';


const moodboard = ['/assets/images/kew/moodboard/image10.jpeg', '/assets/images/kew/moodboard/image11.png', '/assets/images/kew/moodboard/image12.jpeg', '/assets/images/kew/moodboard/image2.jpeg', '/assets/images/kew/moodboard/image3.jpeg', '/assets/images/kew/moodboard/image4.jpeg', '/assets/images/kew/moodboard/image5.png', '/assets/images/kew/moodboard/image6.png', '/assets/images/kew/moodboard/image7.png', '/assets/images/kew/moodboard/image8.jpeg', '/assets/images/kew/moodboard/image9.png']

const primarysources = [ '/assets/images/kew/primary-sources/image26.png', '/assets/images/kew/primary-sources/image27.jpg', '/assets/images/kew/primary-sources/image28.jpg', '/assets/images/kew/primary-sources/image29.jpg', '/assets/images/kew/primary-sources/image30.jpg', '/assets/images/kew/primary-sources/image31.jpg', '/assets/images/kew/primary-sources/image32.jpg', '/assets/images/kew/primary-sources/image33.jpg', '/assets/images/kew/primary-sources/image34.jpg', '/assets/images/kew/primary-sources/image35.jpeg', '/assets/images/kew/primary-sources/image36.jpeg', '/assets/images/kew/primary-sources/image37.jpeg', '/assets/images/kew/primary-sources/image38.jpeg', '/assets/images/kew/primary-sources/image39.jpg', '/assets/images/kew/primary-sources/image40.jpeg', '/assets/images/kew/primary-sources/image42.jpeg', '/assets/images/kew/primary-sources/image43.jpg']

const Kew = () => {
    return (
        <>
            <ScrollingHeader title='KEW' image={titleThumbnail} />
            <div className='text-container'>
            <p>This is an adapted version of my original powerpoint. To view this in its original form, you can download a PDF form <a href="/assets/files/GCSE Portfolio Unit 1 Part 2.pdf" target="_blank">here</a></p>

            <Subsection id='kew--moodboard'/>
            <Gallery imgs={moodboard} />
            <p>I like the very bright and vibrant colours used in these photos, making them very eye catching to the viewer. I also like the very intricate line work of some pieces, but for others, the artist has used plain shaped to create a very bold effect. The colour green is used a lot to help convey the natural beauty of the projects and Kew Gardens as a whole.</p>
            <p>I also like how the artists have adapted their artwork to fit with their packaging, to help create an exciting design, promoting their product.</p>

            <Section id='inspiration'>
                <Subsection id='inspiration--primary-source-photos'/>
                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/primary-sources/image15.jpeg' />
                <Image className='inline content-img' src='/assets/images/kew/primary-sources/image16.jpeg' />
                <p><span style={{ color: 'GrayText' }}>1. </span>I love the complex bulb at the centre, that creates an exiting focal point to the flower. I also love the slightly frayed petals, giving it a sense of age and decay. I love the vibrant purple it has, balancing its frailness, with a such stark colour</p>
                <p><span style={{ color: 'GrayText' }}>2. </span>I love the saturated orange this flower has, and it creates a joyful and warm experience for the audience. Similarly to the flower above, I also love the complex bulb it has, creating a harsh difference between the simple petals</p>
                
                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/primary-sources/image17.jpeg' />
                <Image className='inline content-img' src='/assets/images/kew/primary-sources/image18.jpeg' />
                <p><span style={{ color: 'GrayText' }}>3. </span>I really like how the petals have a gradient from the older, pink tips, to the newer white base. I also love how the petals radiate from the centre, drawing the eye to the yellow stigma at the middle</p>
                <p><span style={{ color: 'GrayText' }}>4. </span>I really like how the petals create a geometric pattern, the entices the audience, and combined with the subtle gradient from the stark yellow, to a slight orange, it creates an inviting and warm flower. As well as this, it creates the image of summer and warmth</p>

                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/primary-sources/image19.png' />
                <Image className='inline content-img' src='/assets/images/kew/primary-sources/image20.png' />
                <p><span style={{ color: 'GrayText' }}>5. </span>I like this plant because the hive like form it has. It creates a sense of structure and rigidness. I also like the red burgundy colour it has, creating a sense of excitement. The imperfect geometry of it also adds to the sense of excitement</p>
                <p><span style={{ color: 'GrayText' }}>6. </span>I like the simplicity of these Osa pulchra flowers, and combined with the translucent white, it gives it a very fragile feel. I like how the stem curves towards the bulb of the flower, further emphasising this fragile sense. As well as this, I also like how the yellow of the filaments contrast against the flowers, making them seem very majestic and precious.</p>
                
                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/primary-sources/image21.png' />
                <Image className='inline content-img' src='/assets/images/kew/primary-sources/image22.png' />
                <p><span style={{ color: 'GrayText' }}>7. </span>I love the vibrant colour this Borwnea coccinea uses, giving a very exotic and exciting feel to it. Its complex shape also adds to this, with its intricate layering of translucent petals, giving the overall plant a very relaxing variation to it. Its smooth texture allows a very pleasant experience to the eye, and its intricateness keeps the eye fixed to it.</p>
                <p><span style={{ color: 'GrayText' }}>8. </span>I like these flowers from the Mango tree as their structure reminds me of fractals, and their branches being very mathematical. I also like the very dark, yet vibrant green, the leaves are, showing off how beautiful nature is. I also like how the branch fades from the new, pale green, to the older, burgundy red. This creates a nice gradient.</p>

                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/primary-sources/image25.jpg' />
                <Image className='inline content-img' src='/assets/images/kew/primary-sources/image24.png' />
                <p><span style={{ color: 'GrayText' }}>9. </span>I like the overall shape of this flower. Its not over complicated, but its also not too minimalistic. The anther’s very bright yellow contrasts well to the translucent white the petals have. As well as this, the outer petals have a pinkish-red backing to them, adding to the very calm sense that they emit.</p>
                <p><span style={{ color: 'GrayText' }}>10. </span>I like the silhouette this cactus has, and it helps to creates a striking image. I also like the very vibrant green that the cactus has due to the early sunrise. This also creates some interesting shadows on the cactus, adding to the dramatic effect</p>

                <Subsection id='inspiration--more-primary-source-photos'/>
                <Gallery imgs={primarysources} />
                <Subsection id='inspiration--secondary-source-photos'/>

                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/secondary-sources/image13.png' />
                <Image className='inline content-img' src='/assets/images/kew/secondary-sources/image14.png' />
                <p><span style={{ color: 'GrayText' }}>1. </span>I really like how the photographer uses both of the elements to create a captivating design. I wanted to try and emulate this in my final design, by layering similar shapes. I also like how they have used contrasting greens and yellows to further emphasise the design</p>
                <p><span style={{ color: 'GrayText' }}>2. </span>I like the silhouette this cactus has, and it helps to creates a striking image. I also like the very vibrant green that the cactus has due to the early sunrise. This also creates some interesting shadows on the cactus, adding to the dramatic effect</p>
            
                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/secondary-sources/image44.png' />
                <Image className='inline content-img' src='/assets/images/kew/secondary-sources/image45.png' />
                <p><span style={{ color: 'GrayText' }}>3. </span>I really like this cactus. Its very small and pale, which implies to me that its quite fragile. This is further enforced by the pink flowers on top. It also like how the pink flower contrasts the pale cactus, creating a vivid effect</p>
                <p><span style={{ color: 'GrayText' }}>4. </span>I love how the Swiss cheese plant creates such a captivating design, with its very distinct holes, allowing light to create very interesting and unique shadows. I also like the very vibrant colour it has, creating a similar look to Tom Abbiss Smith.</p>
            
                <Subsection id='inspiration--non-digital-outcomes'/>

                <p>For my mixed media interpretations, I chose to do 1 in white pastel, on black paper, 2 water colour, a continuous line drawing and finally a pastel drawing. I was happy with how the white pastel, blue tulip and continuous line drawing turned out. I feel like I could have blended the pastels on the rose a bit better, as it looks a bit odd with the harsh lines, but the oil pastels that I were using made it quite hard for me to blend</p>

                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/digital-editing/image46.jpg' />
                <Image className='inline content-img' src='/assets/images/kew/digital-editing/image47.jpg' />
                <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/digital-editing/image48.jpg' />
                <Image className='inline content-img' src='/assets/images/kew/digital-editing/image49.jpg' />
                <Image className='inline content-img' src='/assets/images/kew/digital-editing/image50.jpg' />

                <Subsection id='inspiration--digital-editing'/>
            
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-1/image51.jpg' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-1/image52.png' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-1/image53.png' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-1/image54.png' />
                <p>Here is another mixed media drawing that I made, and the later edited in GIMP. I started by cutting out my sketch, and replacing the background with a gradient I found at UI Gradients. I then created a clipping mask of the flower, and overlayed a flipped version of the gradient. To make this stand out more, I then added a drop shadow, and a thin outline to it.</p>
                
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-2/image55.png' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-2/image56.png' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-2/image57.png' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/flower-2/image58.png' />
                <p>For this edited photo, I first cut around the rose that I drew and then colour in pastels. I then saturated the image slightly, as the lighting when I took the image wasn’t perfect. I then added a coloured background, before then adding a gradient map on top,. I then shifted the hue to something I preferred.</p>
            
                <Subsection id='inspiration--cyanotypes'/>
                <p>For this secondary source, I used Cyanotypes. This is a chemical process that was used to create things such as blueprints. It does this with exposure to UV, curing the chemical making it a vibrant blue. The area that had been covered up by, in this case, some foliage, blocks sunlight from it, and therefore keeping it white.</p>
                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image59.jpeg' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image60.jpeg' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image61.jpg' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image65.jpg' />

                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image62.jpg' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image63.jpg' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image64.jpg' />
                <Image className='line content-img' src='/assets/images/kew/digital-editing/cyanotypes/image66.jpg' />




            </Section>
            </div>
        </>
    )
}

export default Kew