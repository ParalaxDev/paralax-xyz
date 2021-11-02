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
import Navbar from '../components/Navbar';
import Spacer from '../components/Spacer'

import Subsection from '../components/Subsection';


const moodboardImages = [
    'https://i.pinimg.com/474x/6e/83/1f/6e831f00afadee6872f4fa1000687971.jpg',
    'https://i.pinimg.com/474x/33/31/83/3331836d1f3147b94d2d943f6dc6a4d8.jpg',
    'https://i.pinimg.com/474x/2a/09/96/2a0996c5764b866c106b9ace8a08eb51.jpg',
    'https://i.pinimg.com/474x/78/20/ae/7820ae8b82ea565c00791d1246ce260f.jpg',
    'https://i.pinimg.com/474x/04/8c/81/048c812457101d8c61bd58ebb08e0526.jpg',
    'https://i.pinimg.com/474x/bb/b1/8a/bbb18a664ea4bf2b2568915d1373e1fb.jpg',
    'https://i.pinimg.com/474x/9c/d0/58/9cd0587c8239b18ddc6a1f7c5f31ff2f.jpg',
    'https://i.pinimg.com/474x/fa/70/fa/fa70faf41d52ac6a13b7d2d9e2b53873.jpg',
    'https://i.pinimg.com/474x/ad/4c/bc/ad4cbc2b571c1570d20a6a95534a9acd.jpg',
    'https://i.pinimg.com/474x/70/14/6f/70146f7a002e4058c4d79efe73b61541.jpg',
    'https://i.pinimg.com/474x/de/5b/6a/de5b6a0ffa5ffd3c0710f7db561db0a4.jpg',
    'https://i.pinimg.com/474x/cf/4b/e8/cf4be8d97e313687f0df35264fd42768.jpg',
    'https://i.pinimg.com/474x/0e/5d/2c/0e5d2c628a102eba97411deca54079e3.jpg',
    'https://i.pinimg.com/474x/43/05/b4/4305b4afff7ed3533d6f102e6303f7bb.jpg',
    'https://i.pinimg.com/474x/6f/bb/04/6fbb041c5d0ec95b09aa1d0930b5da8d.jpg',
    'https://i.pinimg.com/474x/6f/c8/a5/6fc8a5a39029d0268a91aebb97d8ec28.jpg',
    'https://i.pinimg.com/474x/4d/58/2a/4d582aa6220149f5f1c85c081af8e779.jpg',
    'https://i.pinimg.com/474x/b5/1a/08/b51a0870acb4a8347da6bbdd3abbae07.jpg',
    'https://i.pinimg.com/474x/db/58/e8/db58e823a298b3b3b1f8bb7ac554a8c2.jpg',
    'https://i.pinimg.com/474x/50/aa/53/50aa532adbaf14e76b7dc682ee00d9e1.jpg',
    'https://i.pinimg.com/474x/86/48/89/86488938bcbbde5e76aa98b312a8e759.jpg',
    'https://i.pinimg.com/474x/a1/73/95/a17395b4a16a70e2a944e2a51ab45e42.jpg',
    'https://i.pinimg.com/474x/b1/27/0a/b1270a5340af84a63e50db6a7940f3c5.jpg',
    'https://pro2-bar-s3-cdn-cf1.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/92442fa7-e9e1-4ec8-b932-8d9265c787be_rw_3840.png?h=c3f5cb4237c815d696c0eb5745742dd8',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/e949411a-cc12-4eaa-9589-9e405bb04352_rw_1920.png?h=b163f8847f2125ee452dc85381f21ef0',
    'https://pro2-bar-s3-cdn-cf3.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/ef522edb-b1ee-4918-bbd2-133c70191bd6_rw_3840.png?h=5f32af0fe9ca617df89444c96784e95f',
    'https://pro2-bar-s3-cdn-cf5.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/6fd06295-f196-40c0-a589-8380b0be898f_rw_3840.jpg?h=05a9377a7a4fbad4b8e56a42d352d026',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/770338fe-e5ec-4ae0-9569-4a1e53bc9b53_rw_3840.jpg?h=ef693d623655ef9381184f61654e9f0d',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/77146ff7-2d9c-476e-9814-b164f9af4d8d_rw_3840.png?h=54ed245123b2619558f1af2ef416389c',
    'https://pro2-bar-s3-cdn-cf6.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/76609707-fbb8-41e6-b505-970e94d56c80_rw_3840.png?h=44c785410f315459d1f72583cdf55cf1',
    'https://pro2-bar-s3-cdn-cf.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/86ed3f07-1083-4d42-b8ff-1cd08f136443_rw_3840.png?h=bc58f7647303d649197b6bc7b1853907'
]

const primarySourcePhotos = [
    'https://i.ibb.co/f2yBW7K/20210424-124914.jpg',
    'https://i.ibb.co/gtVF4j1/IMG-20211002-WA0004.jpg',
    'https://i.ibb.co/qgL8rtY/IMG-20211002-WA0000.jpg',
    'https://i.ibb.co/fHbMCJb/IMG-20210927-WA0004.jpg',
    'https://i.ibb.co/DbN4fkK/IMG-20210927-WA0001.jpg',
    'https://i.ibb.co/1LMcnFL/IMG-20210925-WA0014.jpg',
    'https://i.ibb.co/pjrTpD9/IMG-20210907-WA0003.jpg',
    'https://i.ibb.co/CQBTdBm/IMG-20210904-WA0001.jpg',
    'https://i.ibb.co/cvxc5v2/IMG-20210831-WA0004.jpg',
    'https://i.ibb.co/xLvmJPn/IMG-20210829-WA0000.jpg',
    'https://i.ibb.co/kB6Nv9w/IMG-20210826-WA0003.jpg',
    'https://i.ibb.co/GWd0TtN/IMG-20210825-WA0003.jpg',
    'https://i.ibb.co/G5pkLZW/IMG-20210821-WA0003.jpg',
    'https://i.ibb.co/ssqcpKx/IMG-20210817-WA0006.jpg',
    'https://i.ibb.co/GWbndFS/IMG-20210816-WA0008.jpg',
    'https://i.ibb.co/g7NfLrb/IMG-20210816-WA0005.jpg',
    'https://i.ibb.co/pyB0F1Z/IMG-20210815-WA0018.jpg',
    'https://i.ibb.co/f8mnm7S/IMG-20210815-WA0017.jpg',
    'https://i.ibb.co/qNfQfcV/IMG-20210813-WA0009.jpg',
    'https://i.ibb.co/HtCmQ54/IMG-20210813-WA0000.jpg',
    'https://i.ibb.co/mBdTPYY/IMG-20210811-WA0003.jpg',
    'https://i.ibb.co/LgRtNqg/IMG-20210805-WA0000.jpg',
    'https://i.ibb.co/VWm8PD0/IMG-20210730-WA0005.jpg',
    'https://i.ibb.co/fD3PFpb/IMG-20210723-WA0002.jpg',
    'https://i.ibb.co/yF7yx11/IMG-20210727-WA0013.jpg',
    'https://i.ibb.co/gW4yYvX/IMG-20210701-WA0001.jpg',
    'https://i.ibb.co/RbVqR8f/IMG-20210624-WA0005.jpg',
    'https://i.ibb.co/sHKMMdz/IMG-20210607-WA0000.jpg',
    'https://i.ibb.co/hmDXw75/IMG-20210605-WA0000.jpg',
    'https://i.ibb.co/vz58dBQ/IMG-20210530-WA0003.jpg',
    'https://i.ibb.co/wLPgThG/IMG-20210530-WA0001.jpg'
]

const artistResearchMediaExperiment = [
    'https://i.ibb.co/dmQGW6n/20211011-123356.jpg',
    'https://i.ibb.co/4tv316z/20211011-123848.jpg',
    'https://i.ibb.co/zmpZcYX/20211011-124811.jpg',
    'https://i.ibb.co/ZKhnnjp/20211011-124817.jpg',
    'https://i.ibb.co/QPNjQkW/20211011-130201.jpg',
    'https://i.ibb.co/v3pd8yy/20211011-130316.jpg',
    'https://i.ibb.co/d7MS5gW/20211011-130455.jpg',
    'https://i.ibb.co/frsy781/20211011-130635.jpg',
    'https://i.ibb.co/56tjRFY/20211011-130637.jpg',
    'https://i.ibb.co/0Bfj1pp/20211011-130938.jpg',
    'https://i.ibb.co/DfVv9WC/20211011-131035.jpg',
    'https://i.ibb.co/pRHJHMq/20211011-131037.jpg',
    // 'https://i.ibb.co/FbpZtV3/20211012-105228.jpg',
    // 'https://i.ibb.co/FbpZtV3/20211012-105228.jpg',
    // 'https://i.ibb.co/hX910Rn/20211013-133938.jpg'
]
const artistResearchDigitalOutcomes = [
    'https://i.ibb.co/GMKg2cZ/2.png',
    'https://i.ibb.co/d7zrpnZ/3.png',
    'https://i.ibb.co/PmzWs4t/4.png',
    'https://i.ibb.co/m6HQcz6/5.png',
    'https://i.ibb.co/bFLFX6S/6.png',
    'https://i.ibb.co/xMH2TLx/7.png',
    'https://i.ibb.co/jvcHGRT/8.png',
    'https://i.ibb.co/BTMy4cZ/9.png',
    'https://i.ibb.co/ZmK9MSD/10.png',
    'https://i.ibb.co/SvtkdSB/11.png',
    'https://i.ibb.co/ss4xQT8/12.png',
    'https://i.ibb.co/SvtkdSB/11.png',
    'https://i.ibb.co/6BCHb9q/13.png',
    'https://i.ibb.co/FqFqQW6/14.png',
    'https://i.ibb.co/Kz1Mkhq/15.png',
    'https://i.ibb.co/Tg12dmN/16.png',
    'https://i.ibb.co/ZN9GLhx/17.png',
    'https://i.ibb.co/rF4SQQM/18.png',
    'https://i.ibb.co/rF4SQQM/18.png',
    'https://i.ibb.co/cbWDdjp/19.png',
    // 'https://i.ibb.co/rF4SQQM/18.png',
]

const logoMoodboard = [
    'https://i.pinimg.com/474x/8a/24/e9/8a24e9897f91030a39bc2fbc52d88ed4.jpg',
    'https://i.pinimg.com/474x/9c/d0/58/9cd0587c8239b18ddc6a1f7c5f31ff2f.jpg',
    'https://i.pinimg.com/474x/62/40/d8/6240d881a3ece4d59249b35f9ff420a0.jpg',
    'https://i.pinimg.com/474x/4e/07/c2/4e07c24e44317ba1129a7cda4406ec62.jpg',
    'https://i.pinimg.com/474x/df/cd/7e/dfcd7e7d98ccfcc59d3550c8ffc91716.jpg',
    'https://i.pinimg.com/474x/b5/33/92/b533920ee75e471a6fb2fb3e7c4297d2.jpg',
    'https://i.pinimg.com/474x/ed/4d/20/ed4d20aa0325dba7b1cc55c4539d3b4d.jpg',
    'https://i.pinimg.com/474x/91/5d/82/915d8216347ab93d1e47714b0ea989de.jpg',
    'https://i.pinimg.com/474x/c3/20/9b/c3209ba804ff8c2187b1123386f2289e.jpg',
    'https://i.pinimg.com/474x/6e/09/37/6e0937a443f991208f026b11eb94142d.jpg',
    'https://i.pinimg.com/474x/8b/1c/0c/8b1c0c57d50822908d3ee0e76eb05291.jpg',
    'https://i.pinimg.com/474x/60/05/62/600562d6b161b6a181174672ea6ea8ab.jpg',
    'https://i.pinimg.com/474x/b1/e6/37/b1e63781c8c297a1fdf8835196cf6b46.jpg',
    'https://i.pinimg.com/474x/d0/f8/71/d0f871a01d5a6e0e61d4bb3d1833921b.jpg',
    'https://i.pinimg.com/474x/a1/62/a8/a162a8cfb16e89376ccc2c8c662e1eb5.jpg',
    'https://i.pinimg.com/474x/75/41/b1/7541b1dd8a301b5af0b569a2089fac6c.jpg',
    'https://i.pinimg.com/474x/14/eb/3b/14eb3b0cccc6f6c7afc82e112dc6e1b0.jpg',
    'https://i.pinimg.com/474x/52/d8/37/52d8379682554785260caa81954d8063.jpg',
    'https://i.pinimg.com/474x/64/49/b1/6449b12a5936e6b68249c38e0cd16cb6.jpg',
    'https://i.pinimg.com/474x/18/78/f8/1878f8ae7c2782b1dabf331e4909093b.jpg',
    'https://i.pinimg.com/474x/55/b0/32/55b032f1303c62cc058e7d2b642bceeb.jpg'

]

const DrBarkers = (props) => {


    return (
        <>
            <ScrollingHeader title='DR BARKERS' image={titleThumbnail} />
            {/* <Navbar /> */}
            {/* <Index />  */}
            <div className='text-container'>
                <Section id='brief' >
                    {/* <h1>The Brief</h1> */}
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>
                    <Image className='divider-img' src='https://2.bp.blogspot.com/-ErxBjsRqob8/Xkzmc_awSiI/AAAAAAAGkSI/QO6G4ypy3KUpSaw239LII9459E0cxeEoACLcBGAsYHQ/s1600/2.Pawmona1.jpg' />
                </Section>
                <Section id='statement-of-intent' >
                    {/* <h2>Statement of Intent</h2> */}
                    <Image className='left content-img' src='https://1.bp.blogspot.com/-uIq3xvvK1z0/YC4IJ90bkzI/AAAAAAAHnsw/IEllq4G3BPUJGQd21LWgl7KBH8GabIDrwCLcBGAsYHQ/s1600/1-JOMO-Packaging1.jpg' />
                    <p>I chose the Dog Food Brief, as i thought that it related to me far more than any of the others. Whilst I have loved space for a while, and will continue to, I thought that by choosing to make packaging for Dog Food, I would be able to combine by love for my Dog, Milo, and my graphical ability. I also chose it, as upon seeing it, I instantly had loads of ideas (that you can see below), for what I wanted the company and packaging to be. As well as this, I also thought that it would give me the most individual elements to demonstrate my artistic and graphical ability.</p>
                    <br />
                </Section>
                <Section id='ideas' >
                    {/* <h1>Ideas</h1> */}
                    {/* <h2>The Company</h2> */}
                    <Subsection id='the-company' />
                    <p>I wanted to represent Dr Barker's as a family friendly, premium, fun dog food company. I wanted its packaging to be organic, environmentally friendly, and eye catching. To do this, I wanted to primarily use paper bags, and sustainable resources, as the environment is a big aspect to the customer.</p>
                    <p>I chose to use subscriptions boxes as a way to deliver my smaller packages to the customer, allowing more control over the customer experience, and how they view the products. In addition to this, I realised that there is no existing product for this, however there are similar for meal planning such as <a href='https://www.gousto.co.uk/'>Gousto</a> and <a href='https://www.hellofresh.co.uk/'>Hello Fresh</a>, and wanted to base my business off of this. I saw this as a way to deliver to dog owners who want a more personal and customised experience, but don't have the time to go visiting Pet Stores. I wanted to make the shopping experience very convenient for the customer, so it encourages them to shop again.</p>
                    <p>I want Dr Barker's to cater to all types of Dog, from Puppies to Older dogs, and to be nutritious and healthy. I wanted fun looking treats, so it would be fun for a small child to enjoy feeding their dog, but also making it an interesting shape, so its an experience for the dog to eat it.</p>

                    <Image className='divider-img' src='https://ucarecdn.com/538b6797-3bc8-4c85-9852-5c3c2ad2a464/-/quality/lighter/-/format/auto/-/scale_crop/1920x1080/center/' />
                    <Subsection id='the-packaging' />
                    {/* <h2>The Packaging</h2> */}
                    <Image className='left content-img' src='https://www.petfoodprocessing.net/ext/resources/030921_Packaging-trends_Lead-Srcrangizzz.jpg?t=1615230590&width=1080' />
                    <p>For me, I knew I wanted the packaging to be aesthetic, and environmentally friendly. I knew this would mean using sustainable cardboard, and recycled plastic. As well as this, I wanted to make the treat, dog biscuit and kibble bags all resealable, making it very convenient for the customer to refill, further adding to the environmental aspect. I wanted the packaging very colourful and use saturated colours, making it fun for the customer to view. To further use the subscription boxes to my advantage, I want to change the design every month, making it an experience for the customer to open.</p>
                    <p>I also want the packaging to be functional, by making the treat bag into a reusable holder, acting as advertising for when the customer uses out and about, further reducing its environmental impact. I would shape my packaging to give me as much space as possible, giving me more real estate to advertise the brand. I want to make sure the packaging is capable of keeping in the odour and freshness contained, making it more pleasurable to keep in the house.</p>

                    {/* <h2>The Advertising</h2> */}
                    <Subsection id='the-advertising' />
                    <Image className='right content-img' src='https://i.pinimg.com/474x/85/aa/5f/85aa5f4ca8fa523e27fc61caa93b0df0.jpg' />
                    <p>For the advertising campaign I knew I want to do it via Social Media. In this case I chose Instagram, for its simple advertising style. Instagram uses square images or videos to distribute to the customer in their feed. As well as this, it uses tracking to give the user customised adverts based on their interests. This is useful for me, as it will prioritise sending adverts to dog owners, or people interested in dogs, increasing traffic to the website.</p>
                    <p>I want to make a range of adverts, some displaying the actual subscription, some displaying the individual products, and some using just standard graphics, similar to the artwork I will be using on the packaging. As well as this, I will be creating a series of video adverts, demonstrating all the products, and giving some examples using my own dog. It will also give an example of the experience I want to give to the user.</p>
                    <br />
                    <br />
                    <br />
                </Section>
                <Section id='moodboard' >
                    {/* <h1>Moodboard</h1> */}
                    <p>For my moodboard, I created a Pinterest board full of ideas and styles that I love, and want to introduce into my final outcomes. I especially adore the very simple and flat illustrated styles, more specifically from the artist <a href='https://georgetonks.com/'>George Tonks</a>.</p>
                    <Gallery imgs={moodboardImages} />
                    <p>I love the very simple and illustrative style, often associated with big tech companies. I particularly love the playful way of using the packaging to display the product, such as with a small perspex window, and the very saturated colours that are used in packaging, as it represents a playful product, which is exactly what I want Dr Barker's to represent. </p>
                    <p>In addition to this, I also like the simple geometric shapes that are used, implying to the customer that the food itself is fuss free and simple, encouraging them to try it out.</p>
                </Section>
                <Section id='primary-source-photos'  >
                    {/* <h2>Photos of My Dog</h2> */}
                    <Subsection id='photos-of-my-dog' />
                    <Gallery imgs={primarySourcePhotos} />
                    <Subsection id='photos-of-dog-food-packaging' />
                    {/* <h2>Photos of Dog Food Packaging</h2> */}
                </Section>
                <Section id='artist-research' >
                    {/* <h1>Artist Research</h1> */}
                    <Image className='right content-img' src='https://pro2-bar-s3-cdn-cf5.myportfolio.com/a21db12f-3a56-4739-a144-6dc87aa0a368/6fd06295-f196-40c0-a589-8380b0be898f_rw_3840.jpg?h=05a9377a7a4fbad4b8e56a42d352d026' />
                    {/* <p>I chose George Tonks to research for his colourful and approchable art style, which I think represents what I want my brand to be perfectly</p> */}
                    <p>For my Artist Research I chose to look at <a href='https://georgetonks.com/'>George Tonks</a>, an artist who uses digital illustrations to create colourful and inciting designs by combining his passion of the outdoors and wildlife. He uses a very geometric approach to exaggerate their shape and form to show off their diversity. He is 28, and was born in the Cotswolds and has a 1st class BA Hons degree in Illustration from the University of Arts in Bournemouth.</p>
                    <Image className='left content-img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/29197c96340871.5eac0a49ce5fa.jpg' />
                    <p>He primarily uses Procreate for sketches and illustrator where he refines the line work, and adds colours and textures. However, in his final year project, a short film called <a href='https://www.youtube.com/watch?v=g7vEjF0lebE'>N-Orbit</a> where he uses Blender.</p>
                    <p>I got in touch with him via his Instagram, where he told me that his primary goal is to provide awareness towards local wildlife. He does this by including snippets of interesting information and facts with each piece of art. As well as this, he sells prints and t-shirts of his work, where the product materials are sustainably sourced.</p>
                    <p>His inspiration primarily comes from wildlife which stems from his childhood love of Steve Irwin and documentaries by David Attenborough.</p>
                    <p>I love his style due to how he uses very exaggerated proportions in his animals, emphasising and adding to the character. This helps create a link between the viewer, and makes the animal seem more friendly.</p>
                    <p>In addition to this, he also uses saturated colours, suggesting a very friendly design, which i think matches what I want to represent. He also uses a very flat illustrative style, which has become very popular recently. This is partly why I have chosen this style, as it is something that the audience can relate with, making it more approachable. </p>
                    <Image className='divider-img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/07bffa96340871.5eac0a49cf33f.png' />
                    {/* <h2>My Response</h2> */}
                    <Subsection id='my-response' />
                    <p>For my Response to my artist, I decided to create a visually similar image, but using this picture of my dog as a reference.</p>
                    <Image className='right content-img' src='https://i.ibb.co/wLPgThG/IMG-20210530-WA0001.jpg' />
                    <Image className='inline content-img' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/29197c96340871.5eac0a49ce5fa.jpg' />
                    {/* <h2>Non Digital Response</h2> */}
                    <Subsection id='non-digital-response' />
                    <p>I first decided to make a non digital collage as it would best represent the simple and flat shapes and colours Tonks uses in his own work, and to help give me an idea of what i wanted to do digitally. </p>
                    <Gallery imgs={artistResearchMediaExperiment} />
                    <p>I started off my cutting out the rough shapes of my dog, and placing them together. I used a contrasting colour for the nose and eyes, to further define its shape, and to add to the recognisability of the dog. I then added some grass and leaves behind him, to add variety to the image. I then added pupils and lines on the nose, to add realism, and to make it more recognisable</p>
                    <Image className='divider-img' src='https://i.ibb.co/hX910Rn/20211013-133938.jpg' />
                    {/* <h2>Digital Response</h2> */}
                    <Subsection id='digital-response' />
                    <Gallery imgs={artistResearchDigitalOutcomes} />
                    {/* <h2>Final Outcome</h2> */}
                    <Subsection id='final-outcome' />
                    <Image className='right content-img' src='https://i.ibb.co/NVp1WpS/final.png' />
                    <p>For my final artist research outcome, I removed the extra hairs on his stomach, as I thought that it didn't look as similar as my reference photo. This is because my dog has quite smooth hair on the rest of his body, apart from his tummy</p>
                    <p>I'm really happy with how it came out, and I think it represents Tonks' style very well.</p>
                    <Spacer h='50%' />
                </Section>
                <Section id='infographics-and-logo' >
                    <Subsection id='logo--moodboard' />
                    <p>I knew I wanted my logo to be very simple, but also quite striking. To do this, I created a moodboard of logos similar to what i desired:</p>
                    <Gallery imgs={logoMoodboard} />
                    <p>I love how they use clean lines and curves to create a very simple logo, but it is very clear what it demonstrates, and is instantly recognisable. I also like the use of negative space used by a lot of them. This further keeps them simple to view, but adds to the audience's viewing experience. I also love the very flat, two-tone style most of these designs embrace. I think it works really well with the simple lines, as though its emulating a pen stroke</p>
                    <Subsection id='logo--digital-response' />
                </Section>
                {/* <div style={{ height: '1000vh' }} /> */}
            </div>
        </>
    )
}

export default DrBarkers