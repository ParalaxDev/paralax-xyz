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

const moodboard2 = ['/assets/images/kew/moodboard-2/image100.png', '/assets/images/kew/moodboard-2/image101.jpeg', '/assets/images/kew/moodboard-2/image102.png', '/assets/images/kew/moodboard-2/image103.jpeg', '/assets/images/kew/moodboard-2/image104.jpeg', '/assets/images/kew/moodboard-2/image105.jpeg', '/assets/images/kew/moodboard-2/image106.jpeg', '/assets/images/kew/moodboard-2/image107.jpeg', '/assets/images/kew/moodboard-2/image108.jpeg', '/assets/images/kew/moodboard-2/image92.jpeg', '/assets/images/kew/moodboard-2/image95.png', '/assets/images/kew/moodboard-2/image97.png', '/assets/images/kew/moodboard-2/image98.png', '/assets/images/kew/moodboard-2/image99.png']

const outcome1Inspiration = ['/assets/images/kew/outcome-1/inspiration/ (1).jpg', '/assets/images/kew/outcome-1/inspiration/ (2).jpg', '/assets/images/kew/outcome-1/inspiration/ (3).jpg', '/assets/images/kew/outcome-1/inspiration/ (4).jpg', '/assets/images/kew/outcome-1/inspiration/ (5).jpg', '/assets/images/kew/outcome-1/inspiration/ (6).jpg', '/assets/images/kew/outcome-1/inspiration/ (7).jpg', '/assets/images/kew/outcome-1/inspiration/image131.jpeg', '/assets/images/kew/outcome-1/inspiration/image132.png', '/assets/images/kew/outcome-1/inspiration/image133.png', '/assets/images/kew/outcome-1/inspiration/image134.png', '/assets/images/kew/outcome-1/inspiration/image24.png', '/assets/images/kew/outcome-1/inspiration/image42.jpeg', '/assets/images/kew/outcome-1/inspiration/image43.jpg']

const outcome2Processes = ['/assets/images/kew/outcome-2/processes/image174.png', '/assets/images/kew/outcome-2/processes/image175.png', '/assets/images/kew/outcome-2/processes/image176.png', '/assets/images/kew/outcome-2/processes/image177.png', '/assets/images/kew/outcome-2/processes/image178.png', '/assets/images/kew/outcome-2/processes/image179.png', '/assets/images/kew/outcome-2/processes/image180.png', '/assets/images/kew/outcome-2/processes/image181.png', '/assets/images/kew/outcome-2/processes/image182.png', '/assets/images/kew/outcome-2/processes/image183.png', '/assets/images/kew/outcome-2/processes/image184.png', '/assets/images/kew/outcome-2/processes/image185.png']

const outcome3Inspiration = ['/assets/images/kew/outcome-3/inspiration/d460282f3a4673025520e31bf7d7dc8c.jpg', '/assets/images/kew/outcome-3/inspiration/db5e7df30e165a7a32b5c63548564516.jpg', '/assets/images/kew/outcome-3/inspiration/dd8b5fd670e110c8aced32c41efc5dc2.jpg', '/assets/images/kew/outcome-3/inspiration/image202.jpeg', '/assets/images/kew/outcome-3/inspiration/image203.jpeg', '/assets/images/kew/outcome-3/inspiration/image204.jpeg', '/assets/images/kew/outcome-3/inspiration/image205.jpeg', '/assets/images/kew/outcome-3/inspiration/image206.jpeg', '/assets/images/kew/outcome-3/inspiration/image207.jpg', '/assets/images/kew/outcome-3/inspiration/image208jpg.jpg', '/assets/images/kew/outcome-3/inspiration/index.jpg', '/assets/images/kew/outcome-3/inspiration/specsavers-bus-wrap-ad-design1.jpg', '/assets/images/kew/outcome-3/inspiration/vidRTLH9S9vjamHagc6EmC-1200-80.jpg', '/assets/images/kew/outcome-3/inspiration/w524fmvzmqqzjfxz6gh7x8jw48_thumbnail.png']

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
                <Section id='infographics'>
                    <Subsection id='infographics--original-infographics'/>
                    <p>As part of our Kew Gardens project, we had to make an infographic on them. I first created the Infographic you can see here, but due to the lockdown, I had no access to any professional art tools, and so made it in PowerPoint. Of course, I was not happy with this outcome, as it seemed very plain, and not attractive to the eye, so I created a new Infographic, that I far prefer.</p>
                    <p>Here is a small moodboard that I put together to help inspire my design:</p>
                    <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/infographics/moodboard-old/image69.png' />
                    <Image className='inline content-img' src='/assets/images/kew/infographics/moodboard-old/image71.jpg' />
                    <Image className='divider-img' src='/assets/images/kew/infographics/moodboard-old/image70.png' />
                    <p>My infographic:</p>
                    <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/infographics/moodboard-old/image66.png' />
                    <Image className='inline content-img' src='/assets/images/kew/infographics/moodboard-old/image67.png' />

                    <Subsection id='infographics--improved-infographic'/>
                    <p>For my revised Infographics, I wanted to keep it bold and bright, to help draw in the eye to the information. I also used the Leaves at the top, and the tree line at the bottom, to help create a natural border around the poster. I added the banded sky to te background, to help break up the plain colour I originally used. I also did this to increase contrast of the flowers at the top, as it was hard to see them on the pale blue I had picked.</p>
                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image79.png' />
                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image72.png' />
                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image73.png' />
                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image74.png' />

                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image75.png' />
                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image80.png' />
                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image76.png' />
                    <Image className='line content-img' src='/assets/images/kew/infographics/revised-version/image77.png' />
                    <Image className='divider-img' src='/assets/images/kew/infographics/revised-version/image78.png' />
                </Section>
                <Section id='bradbury-thompson'>
                    <Subsection id='bradbury-thompson--artist-research' />
                    <p>Bradbury Thompson was born in Kansas on March the 25th of 1911 and was educated at the Washburn University. He worked for promotional magazine Westvaco Inspirations, an extension of the Westvaco Paper Corporation, where he designed more than 60 issues.</p>
                    <p>He started off by borrowing printed plates and separations from different agencies, magazines and museums to incorporate into his work. He sued photographs and illustrations mixed with contemporary typography and bold colours to create a very eye catching style.</p>
                    <Image className='divider-img' src='/assets/images/kew/bradbury-thompson/artist-research/image83.png'/>
                    <p>In 1969-1979 Thompson worked together with Washburn to create the Washburn Bible, a redesign of the King James Bible. Another significant point in his career, was his publication of Alphabet 26, a revolutionary monoalphabet, an alphabet whose uppercase and lowercase firms of each letter were the same, and case was expressed through size only.</p>
                    <p>As well as all of this, Thompson also taught at Yale University. In his lifetime Thompson received several awards including National Society of Art Directors of the Year Award, induction into Art Directors Hall of Fame and AIGA Medal.</p>
                    <p>He was inspired by the blending of classic and historic typography, with the modern, more organised typography of today.</p>

                    <Image className='left content-img' src='/assets/images/kew/bradbury-thompson/artist-research/image84.jpg'/>
                    <p>I really like the colours Thompson uses in  most of his pieces. He uses the CMYK colour model, also known as cyan, magenta, yellow and key. Bradbury combines uses these colours, much like printers to create another colour where they overlap, creating a sense of uniqueness to it, allowing the audience to find another shape within the overlap. As well this, he uses harsh angles on the text, creating an interesting look. In addition to this, he uses an adaptation of his Alphabet 26 typeface, creating an irregularity that incites the audience.</p>
                    <Image className='content-img' style={{float: 'right', marginRight: '20px'}} src='/assets/images/kew/bradbury-thompson/artist-research/image86.png'/>
                    <p>Thompson once again uses cyan, magenta, yellow and key (black) to create areas of overlap with bright colours there. As well as this, the rotation of the hammer acts as though someone is swinging it. Thompson embraces this by making the sleek, serif font look as though it is being hit down. The piece looks quite minimalist due to the large space used to draw attention to the only colour in the piece</p>
                    <Image className=' content-img' style={{float: 'left', marginRight: '20px'}} src='/assets/images/kew/bradbury-thompson/artist-research/image85.png'/>
                    <p>I like how Thompson uses the circles of colour to help break up the very detailed drawing of the anatomy of a human. He once again embraces the overlap between each circle to create interesting colours to entice the audience. I also like the contrast between the complex human anatomy and the simple circles of colour. As well as this, he uses a simple sans serif font, that also helps to enforce this.</p>
                    <Spacer h={22} />

                    <Subsection id='bradbury-thompson--outcomes' />
                    <p>I couldn’t use any of my primary source photographs, as the process I was using requires a very high resolution. To help with this, I found one online that a plain background I could then get rid of. Another reason why I chose this flower image was because of the very beautiful stamen , that I hoped to capture in my design.</p>
                    <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/bradbury-thompson/outcomes/image90.jpg' />
                    <Image className='inline content-img' src='/assets/images/kew/bradbury-thompson/outcomes/image87.png' />
                        
                    <p>For my recreation of his work, I found a high resolution image of a flower, and increased the pixels per inch to 72. I then turned it into greyscale, and boosted the shadows and the highlights. I then used the halftone filter, to give it a speckled look. I then brought it into Photoshop at school to turn it into a poster. I then got a monoalphabet, similar to the ones Bradbury used in his posters. I rotated it and used a similar colour, and added some information. </p>
                    <Image style={{paddingRight: '20px'}} className='inline content-img' src='/assets/images/kew/bradbury-thompson/outcomes/image88.png' />
                    <Image className='inline content-img' src='/assets/images/kew/bradbury-thompson/outcomes/image89.png' />
                    <p>For my final design, I originally included a lot of extra space. I first thought this would help to emphasise the small size of these plants, and the preciousness of them. However, this just ended up looking weird, but it did draw the eye more to the image, because of the lack of anything in the space. I then decided to crop the image, and tinker with the design, to remove all this excess space, to create a far more compact design.</p>

                    <Image className='divider-img' src='/assets/images/kew/bradbury-thompson/outcomes/image91.jpg' />
                </Section>
                <Section id='kew-gardens'>
                    <Subsection id='kew-gardens--the-brief' />
                    <p>The Brief states that we should produce a series of graphical outcomes that celebrates 260 years of Kew Gardens. We should use an existing theme, or create your own, to help express your work.</p>
                    <p>I will be creating some examples of event branding, in the 7 weeks before the exam, a flyer during the exam, and for my final, 3D outcome, a Bag. I have chosen primarily Tom Abbiss Smith, but influenced slightly by Henri Mattisse</p>
                    <Subsection id='kew-gardens--moodboard' />
                    <p>Here you can see some of my moodboard that I have created to influence design:</p>
                    <Gallery imgs={moodboard2} />
                </Section>
                <Section id='tom-abbiss-smith'>
                    <Subsection id='tom-abbiss-smith--artist-research' />
                    <Image className='right content-img' src='/assets/images/kew/abbiss-smith/artist-research/image111.png' />
                    <p>Tom Abbiss-Smith is an Artist and Graphic Designer from Norwich, UK. He uses a mix of digital collage, printmaking and painting to create abstract collages primarily of flowers, plants and fruit. </p>
                    <p>He graduated from the Norwich University of Arts, where he discovered the Polish poster artist Henryk Tomaszewski, who has influenced his work with his diverse use of shape and typography.</p>
                    <Image className='content-img' style={{float: 'left', marginRight: '20px'}}src='/assets/images/kew/abbiss-smith/artist-research/image110.jpg' />
                    <p>To create such varied pieces, Abbiss-Smith starts by experimenting with many different mediums on paper, by cutting out coloured paper, experimenting with textures, and arranging compositions. Once this is done, he will scan them into Photoshop or Illustrator, where he can then edit them.</p>
                    <p>His work is often seen as screen prints, or applied as a design to clothing or a poster. He has worked for many companies, including , Häagen-Dazs, Proper Corn and the Whip Appeal of Sweden</p>
                    <Image className='content-img' style={{float: 'right', margin: '5px 10px'}} src='/assets/images/kew/abbiss-smith/artist-research/image112.png' />
                    <p>His work is often very colourful, helping encite the audience to find out more about the product it is helping to advertise. As well as this , he overlays texture onto his shapes, to help create a sense of depth without needing tone or other traditional methods. He also ensures that there are no flat lines, helping to emphasise the organic sense of nature he wants his art to bring. This is done by creating curved shapes, or by creating rough edges like a piece of torn paper. This further helps to make sure it doesn’t look to bland, and breaks up the very flat colours he uses</p>

                    <Image className='content-img' style={{float: 'right', padding: '0px 10px'}} src='/assets/images/kew/abbiss-smith/artist-research/image113.jpg' />
                    <Image className='content-img' style={{padding: '0px 10px'}} src='/assets/images/kew/abbiss-smith/artist-research/image114.jpg' />
    
                    <p><span style={{ color: 'GrayText' }}>1. </span>I like how his pieces tend to have a limited colour palette, creating a minimalist design. Combined with the very subtle layers of texture that he overlays on top of the flat shapes, and it creates a simple, but effective design. He will often use a curved line, to emulate what is seen in nature, but will mix in some randomness, creating the look of a traditional hand cut collage. </p>
                    <p><span style={{ color: 'GrayText' }}>2. </span>I particularly like how he has used very cold colours, to represent this to be winter, and the textures he use are very faint, to create a sense of frailness in the leaves and flowers. This is emphasised further by the faint textures overlayed on top, making sure that its not bold and doesn’t over power the frail leaf below</p>
                
                    <Subsection id='tom-abbiss-smith--non-digital-outcomes' />


                    <p>I created multiple small tiles of textures, that I could use in my final outcome, similar to how Tom Abbiss-Smith. I mainly used different sponges, but also used the ends of paint brushes to create a texture in the wet paint and even put sand in the paint</p>
                    <Image className='threexline content-img' src='/assets/images/kew/abbiss-smith/outcomes/image116.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/abbiss-smith/outcomes/image117.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/abbiss-smith/outcomes/image118.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/abbiss-smith/outcomes/image121.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/abbiss-smith/outcomes/image119.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/abbiss-smith/outcomes/image120.jpeg' />

                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/abbiss-smith/outcomes/image115.jpeg' />
                    <p>I made a collage, mimicking Tom Abbiss Smith’s style. I used primarily different colours of paper and card to help create the base, but created texture on some of the paper using a variety of techniques, including ripping paper, and drawing the textures on with either a sharpie, or a highlighter.</p>
                    <Spacer h={37} />
                </Section>
                <Section id='henri-matisse'>
                    <Subsection id='henri-matisse--artist-research' />
                    <Image className='right content-img' src='/assets/images/kew/matisse/artist-research/image125.jpeg' />
                    <p>Henri Matisse is a French Artist born in 1869 in Le Cateau-Cambresis, and he was known for being a Printmaker and Sculptor, but primarily a painter. He originally studied Law, but his Mother bought him a set of Art Supplies following an Appendicitis attack. He described the time after as “a kind of paradise”, and decided to become an artist. </p>

                    <p>He studied art at the Académie Julian where he originally painted still lifes and landscapes in a traditional style. He later left this style, as he was introduced to impressionism, and swapped the more traditional colour palette for more bright and saturated colours.</p>
                    <Image className='left content-img' src='/assets/images/kew/matisse/artist-research/image124.jpg' />

                    <p>As he got older his work evolved into collages and cut-outs due to the physical limitations his cancer had imposed on him. He would prepare pure and vibrant colours to create a playful atmosphere. His assistants would then paint a large sheet with this colour, and pin it to his studio wall. He would then cut it out in dynamic and spontaneous shapes, and collage them together to create anything from a small canvas, to a huge mural</p>

                    <p>His work is very expressive, and he uses the exposed white canvas to create a sense of volume and structure in his work. He was inspired heavily from art from other cultures, which can be seen in his colourful and playful work.</p>

                    <p>I will be focusing on primarily on his collages and cut-outs, as it better represents my style</p>

                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/matisse/artist-research/image122.jpg' />
                    <Image className='content-img' src='/assets/images/kew/matisse/artist-research/image126.jpg' />

                    <p><span style={{ color: 'GrayText' }}>1. </span>I like how Matisse has used vibrant, and contrasting colours in his piece to create a sense of playfulness and abstraction. This is further emphasised by the subtle texture the paper has, break up the composition. This is further emphasised by the slight shadows created by the layered paper. Matisse uses very abstract and dynamic shapes to create an almost childlike design.</p>
                    <p><span style={{ color: 'GrayText' }}>2. </span>I really like the simplicity of Matisse’s design, with very few, but effective shapes demonstrating how simplistic but beautiful nature is. His colours in this piece are not quite as vibrant in this, but I think it better represents the colours found in nature, rather than the unnatural colours found in his other designs. I like how there are no straight or hard lines, only curved, further demonstrating the beauty in nature. As well as this, I also like how he has placed the individual leaves and flowers, as thought they are radiating from a single point, similar to how a normal plant would grow</p>
                    <Subsection id='tom-abbiss-smith--non-digital-outcomes' />

                    
                    <Image className='threexline content-img' src='/assets/images/kew/matisse/outcomes/image127.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/matisse/outcomes/image128.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/matisse/outcomes/image129.jpeg' />

                    <p>For my recreation of Matisse’s work, I cut out shapes similar to his from various magazines. This gives me interesting patterns to experiment with. Whilst this deviates from Matisse’s original design, I think that it looks good, as it creates texture for the audience, as well as variation to the shapes.</p>
                    <p>I also experimented with the composition of the shapes. I wanted to create a sense of all the other flowers and leaves coming together to create a larger plant.</p>
                </Section>
                <Section id='outcome-1'>
                    <Subsection id='outcome-1--inspiration' />
                    <p>I used lots of my primary source photos to inspire my final design. For example, I primarily focused on finding various pictures of different shapes and sizes of cacti. I did this because I knew that I wanted to focus on the Princess of Wales Conservatory, and so a cactus would be vital to the design. I also found a image of the Swiss cheese plant, and I wanted to include its unique shape in my design. I then also found some cactus flowers, as I wanted to emulate the very warm colours that are found on them. I didn’t end up using the round cacti in my design, but I used them to heavily influence the typography and iconography in my design. I don’t have any cacti at home, and didn’t have the opportunity to go to Kew, so I found most of these images on unsplash.com, and pixabay.com</p>
                    <Gallery imgs={outcome1Inspiration} />
                    <Subsection id='outcome-1--processes' />
                    <p>In the Exam, I used a mix of Affinity Pro Designer, for the vector shapes, and GIMP, for text box. I started by creating the cactus, which I wanted to be one of the main focus points. I used reference images from the primary source photos. I created it by using overlapping shapes, with brush strokes, to use as texture for the needles. I then created a flower for the cactus, petals and a Monstera Deliciosa (Swiss Cheese Plant), using similar methods, all referencing my primary images. I then created a cactus icon, and created the text box in GIMP. I then added the 50% off icon, and the underground icon.</p>

                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image135.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image136.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image137.png' />

                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image138.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image139.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image140.png' />

                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image146.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image142.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image143.png' />

                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image141.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image144.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/processes/image149.png' />

                    <p>After the Exam, I first shrunk the 50% off icon, as it was the main focal point of the poster, and it detracted from the experience I wanted to give the viewer. I later then removed it entirely, as the vibrant red I used still caused it to be the centre of attention, and gave it an almost cheap look.</p>
                
                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/outcome-1/badge-experiments/image147.png' />
                    <Image className='content-img' src='/assets/images/kew/outcome-1/badge-experiments/image148.png' />

                    <Subsection id='outcome-1--typography' />
                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/outcome-1/typography/image152.jpeg' />
                    <p>To help represent my poster, I wanted the ‘260 Years At Kew’ to stand out, and to incite the audience into finding out more. To do this, I started by just experimenting with different ideas on paper. Most of these ideas are the numbers 260, with an icon of a flower, grass or cactus involved. This was to link both the 260 with the things the audience could find at Kew. I then took some of these ideas onto my computer to refine more. </p>
                    <p>I knew the centre piece of my design was going to be of the Princess of Wales Conservatory, which primarily houses cacti, so it was the obvious choice for my icon. I experimented with it in different positions, and ended up using two of them.</p>

                    <Spacer h='9' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/typography/image153.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/typography/image154.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/typography/image155.png' />

                    <Subsection id='outcome-1--colour-experiments' />

                    <p>Abbiss Smith’s work often feature colours very heavily in his work. Because of this, I wanted to try and capture the bright colours he uses, to captivate the audience.</p>
                    <p>His work often features either very warm colours, or very cold colours, like is pictured. Therefore, I chose to mainly use warm colours in mine. This is primarily because the focal piece of my 1st outcome is a cactus, which suggests warm environments. </p>


                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/outcome-1/colour-experiments/image109.jpg' />
                    <Image className='content-img' src='/assets/images/kew/outcome-1/colour-experiments/image113.jpg' />

                    <p>At first, I didn’t really consider this, so after the exam was over, I started to recolour my outcome, to help portray this more. I first started by shifting the hue of the colder and more green elements, towards red and orange. I really liked how the green leaf in the corner turned into a more dehydrated, and more desert orientated plant. Because of this change, I also decided to recolour the cactus, as the bright green colours where distracting, and offputting</p>

                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/outcome-1/colour-experiments/image150.png' />
                    <Image className='content-img' src='/assets/images/kew/outcome-1/colour-experiments/image151.png' />

                    <Subsection id='outcome-1--layout-experiments' />
                    <p>I then decided to expand upon the idea of the image being seen through the text, and decided to use it to give more information on Kew. I started by rearranging the icon, so it would flow better in a landscape format, and then added some dividing lines around it, to further draw the audiences attention to the title. I first experimented with making all text see-through, but this resulted in it being hard to read, and clunky. I made my subheading about a particular part of Kew – Princess of Wales Conservatory – slightly bolder in comparison to the other secondary text, to portray that it is more important than it. I then moved the Underground icon into the box, as it was somewhat constrained by the edge of the poster, and the edges of the box. Finally, I added some more foliage around the box, to make it seem part of its surroundings.</p>
                    <Image className='divider-img' src='/assets/images/kew/outcome-1/layout-experiments/image156.png' />
                    <p>Upon further discussion, it was decided that whilst the information sat well inside the box, it was covering up most of the artwork behind it. To stop this, I started by shrinking the box, and the information in it accordingly, and added a similar icon to the Underground, but with the postcode, etc.</p>
                    <Image className='divider-img' src='/assets/images/kew/outcome-1/layout-experiments/image157.png' />
                    <p>I further experimented with the positioning of the white boxes. For this experiment, I split the white box into 3 segments. I did this to help reveal more of the art work behind. To help this design work, I lessened the amount of information I was trying to show, and decided to only show the opening times. I then moved some of the overhanging items, to stop the obstruction of the text.</p>
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/layout-experiments/image159.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/layout-experiments/image160.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-1/layout-experiments/image158.png' />
                    <Subsection id='outcome-1--final-outcome' />
                    <Image className='divider-img' src='/assets/images/kew/outcome-1/finals/image162.png' />
                    <Image className='divider-img' src='/assets/images/kew/outcome-1/finals/image161.png' />
                </Section>
                <Section id='outcome-2'>
                    <Subsection id='outcome-2--inspiration' />
                    <p>I took lots of images at Clivden, to help inspire my final design. I chose these particular photos due to their bright and vibrant colours, similar to what Tom Abbiss Smith uses in his own work. I also like the geometric patterns that the petals make, creating an enticing image for the audience. As well as this, I also love how different the flowers are, creating a diverse range of shapes and colours, from tall flowers with small petals to very geometric and precise flowers</p>
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image164.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image165.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image166.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image167.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image168.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image169.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image170.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image171.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/inspiration/image172.jpeg' />
                    <Subsection id='outcome-2--processes' />
                    <p>For my 2nd outcome, I used Affinity Designer for its tools with vector art. I started by creating the ferns, which I knew I wanted to help create a solid base on which I could add more foliage to the bouquet. I started off by creating some very generic flowers, but I later hated how similar they looked, so got rid of them. I then started by creating more flowers based off of pictures I took. I then reused some of them, by recolouring them, and rotating them, to help add volume of the bouquet. I continued to add small sprigs of cow parsley, and leaves to help bulk out the piece. I then started adding text and a containing rectangle, to help promote Kew. I experimented by adding a shadow, but later removed it, as it added too much complexity to it. Finally I added a small established element, to further emphasise 260 years at Kew.</p>
                    <Gallery imgs={outcome2Processes} />
                    <Subsection id='outcome-2--shadow-experiments' />
                    <p>Originally, I wanted to have a drop shadow on all of the flowers and text, to help increase realism on the final product. However, I later removed this, as it made the image much more complex and cluttered, detracting from Abbiss Smiths' distinct style. When I removed all the shadows, it made the letters very difficult to read the text on the border, due to them being the same colour. To help increase contrast and help with readability, I added these shadows back in. I’m very glad I made these changes, and I think it makes the final product look much more professional, and clean.</p>
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/shadow-experiments/image163.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/shadow-experiments/image186.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/shadow-experiments/image187.png' />
                    <p>As well as this, I also moved the W, as it obstructed the focal point of the poster, and was very distracting, so I later moved it towards the right, and embedded it in the bouquet a bit more.</p>
                    <Subsection id='outcome-2--layout-experiments' />
                    <p>For this experiment I decided to remove the complexity of the letters mixed in with the bouquet, and instead decided to keep them separate. I experimented with the border and without, but decided to keep it, as it tied it all together, by adding volume to the bouquet.</p>
                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/outcome-2/layout-experiments/image188.png' />
                    <Image className='content-img' src='/assets/images/kew/outcome-2/layout-experiments/image189.png' />
                    <Subsection id='outcome-2--colour-experiments' />
                    <p>I wanted to keep the colours as bright and as engaging as possible, to help draw the eye to the bag, and to make Kew’s brand attractive to the audience. As well as this Abbiss Smiths’ work is often very colourful, using primarily very saturated and vibrant colours. To help emulate this in my own work, I also tried to pick similarly bright colours, to help grab the audience’s attention.</p>
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/colour-experiments/image192.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/colour-experiments/image193.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/colour-experiments/image194.png' />
                    <p>However, I later experimented with various different colour combinations, to see how they would look. I first experimented with changing the border and text colour. I think that the light cyan I chose for one experiment is way too light, resulting in the text being hard to read. However, I love how the purple turned out, and mixes up the very floral colours in the bouquet.</p>
                    <p>I then decided to recolour some of the flowers to fit better with the new colours. I chose mainly pink/red, as I thought it looked good with</p>
                    <Subsection id='outcome-2--mockups' />
                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/outcome-2/finals/mockups/image195.jpeg' />
                    <Image className='content-img' src='/assets/images/kew/outcome-2/finals/mockups/image196.jpeg' />
                    <Image className='divider-img' style={{width: 'calc(100% - 20px)'}}src='/assets/images/kew/outcome-2/finals/mockups/image197.png' />
                    <Subsection id='outcome-2--final-3d-outcome' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/finals/3d-outcomes/image198.jpg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/finals/3d-outcomes/image199.jpg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-2/finals/3d-outcomes/image200.jpg' />
                </Section>
                <Section id='outcome-3'>
                    <Subsection id='outcome-3--inspiration' />
                    <p>For my final outcome, I wanted to do something different, and came up with the idea of a Van wrap for Kew Gardens. I thought this would be a good idea because it allows Kew to advertise when they are on errands. I wanted the van to look immersed in nature, and to link back to my 2nd outcome, as I really love how it turned out.</p>
                    <p>I chose to create a basic van, as it would give me the most space to work with.</p>
                    <Gallery imgs={outcome3Inspiration} />
                    <Subsection id='outcome-3--processes' />
                    <p>I started off my creating a base for the van in Affinity Designer, and added some colour to it with mushrooms and grass. I originally used a 2d mock up, but decided to use a 3D model instead. I then created some text by clipping some leaves below it.</p>
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image209.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image209.5.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image210.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image211.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image212.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image213.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image214.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image215.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image216.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image217.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image218.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/processes/image219.png' />
                    <Subsection id='outcome-3--experiments' />
                    <p>To show some of my experiments, I will show my UV map, which is an image that gets mapped onto the 3D model, where it is much easy to view all the changes I made.</p>
                    <p>I moved the text around a lot, experimenting with positioning, and sizing. One big change was the addition of the grill, and plastic bumpers. To add these, I had to find similar images of a Van, cut them out, and the adjust them to fit. I am however very happy I made this decision, as it makes the van look much more professional.</p>
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/experiments/image222.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/experiments/image220.png' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/experiments/image221.png' />
                    <p>As well as this, I also experimented with moving the leaves on the back up and down, but settled with the current design as it transitioned well to the top of the van</p>
                    <p>I experimented with adding another border of leaves to the top, to help frame it, and really liked how it turned out. I also experimented with adding a blue curve cutting through the middle. I then added some splashes of texture to it. I didn’t like it with the top border, as it made it far too crowded, and I didn’t mind it without the top header, but the text became quite hard to read, and it wasn’t easy to read from afar.</p>
                    <Image className='content-img' src='/assets/images/kew/outcome-3/experiments/image224.png' />
                    <Image className='content-img' style={{float: 'left', paddingRight: '20px'}} src='/assets/images/kew/outcome-3/experiments/image226.png' />
                    <Subsection id='outcome-3--colour' />
                    <p>I chose these colours as I wanted to go for a winter/magical theme. I picked similar turquoises, greens and blues to the ones in these images, and I also loved the mushrooms, and it inspired me to include some in my own design. I wanted colours for the mushrooms that would add contrast to the image, and to break up the very samey leaves along the bottom. To do this I picked somewhat subdued yellows, oranges and reds to help with this, and to not keep them from detracting from the focus, which is the text.</p>
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/colour-experiments/image229.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/colour-experiments/image230.jpeg' />
                    <Image className='threexline content-img' src='/assets/images/kew/outcome-3/colour-experiments/image231.jpeg' />
                    <Subsection id='outcome-3--final-outcome' />
                    <Image className='divider-img' src='/assets/images/kew/outcome-3/finals/image233.gif' />
                    <Image className='divider-img' src='/assets/images/kew/outcome-3/finals/image235.png' />
                    <Image className='divider-img' src='/assets/images/kew/outcome-3/finals/image236.png' />
                    <Image className='divider-img' src='/assets/images/kew/outcome-3/finals/image237.png' />
                </Section>

            </div>
        </>
    )
}

export default Kew