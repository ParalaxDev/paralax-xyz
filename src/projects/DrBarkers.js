import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'
import React from 'react'
import Gallery from '../components/Gallery';

import '../styles/basicStyling.scss'
import '../styles/gallery.scss'



import titleThumbnail from '../images/drbarkers.png'
import Section from '../components/Section';

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


const DrBarkers = () => {
    return (
        <>
            {/* <img src={titleThumbnail} style={{ width: '20vw' }} /> */}
            <ScrollingHeader title='DR BARKERS' image={titleThumbnail} />
            {/* <div style={{ height: '40vh' }} /> */}
            <div className='text-container'>
                <section id='brief'>
                    <h1>The Brief</h1>
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>
                </section>
                <section id='statementofintent'>
                    <h1>Statement of Intent</h1>
                    <p>A manufacturer requires graphics for a new brand of pet food named 'Dr Barker's'. You might consider approaches such branding and packaging or advertising material. Examples can be seen in packaging designs and in advertising for pet food by Ideas that Kick, 29 Agency, Seymourpowell Ltd, and Break Packaging and Design. When producing your response, carefully consider shelf presence and the target market.</p>

                    <h2>The Company</h2>
                    <p>I wanted to represent Dr Barker's as a family friendly, premium, fun dog food company. I wanted its packaging to be organic, environmentally friendly, and eye catching. To do this, I wanted to primarily use paper bags, and sustainable resources, as the environment is a big aspect to the customer.</p>
                    <p>I chose to use subscriptions boxes as a way to deliver my smaller packages to the customer, allowing more control over the customer experience, and how they view the products. In addition to this, I realised that there is no existing product for this, however there are similar for meal planning such as Gousto and Hello Fresh, and wanted to base my business off of this. I saw this as a way to deliver to dog owners who want a more personal and customised experience, but don't have the time to go visiting Pet Stores. I wanted to make the shopping experience very convenient for the customer, so it encourages them to shop again.</p>
                    <p>I want Dr Barker's to cater to all types of Dog, from Puppies to Older dogs, and to be nutritious and healthy. I wanted fun looking treats, so it would be fun for a small child to enjoy feeding their dog, but also making it an interesting shape, so its an experience for the dog to eat it.</p>

                    <h2>The Packaging</h2>
                    <p>For me, I knew I wanted the packaging to be aesthetic, and environmentally friendly. I knew this would mean using sustainable cardboard, and recycled plastic. As well as this, I wanted to make the treat, dog biscuit and kibble bags all resealable, making it very convenient for the customer to refill, further adding to the environmental aspect. I wanted the packaging very colourful and use saturated colours, making it fun for the customer to view. To further use the subscription boxes to my advantage, I want to change the design every month, making it an experience for the customer to open.</p>
                    <p>I also want the packaging to be functional, by making the treat bag into a reusable holder, acting as advertising for when the customer uses out and about, further reducing its environmental impact. I would shape my packaging to give me as much space as possible, giving me more real estate to advertise the brand. I want to make sure the packaging is capable of keeping in the odour and freshness contained, making it more pleasurable to keep in the house.</p>

                    <h2>The Advertising</h2>
                    <p>For the advertising campaign I know I want to do it via Social Media. In this case I chose Instagram, for its simple advertising style. Instagram uses square images or videos to distribute to the customer in their feed. As well as this, it uses tracking to give the user customised adverts based on their interests. This is useful for me, as it will prioritise sending adverts to dog owners, or people interested in dogs, increasing traffic to the website.</p>
                    <p>I want to make a range of adverts, some displaying the actual subscription, some displaying the individual products, and some using just standard graphics, similar to the artwork I will be using on the packaging. As well as this, I will be creating a series of video adverts, demonstrating all the products, and giving some examples using my own dog. It will also give an example of the experience I want to give to the user.</p>
                </section>
                <section id='moodboard'>
                    <h1>Moodboard</h1>
                    <p>For my moodboard, I created a Pinterest board full of ideas and styles that I love, and want to introduce into my final outcomes. I especially love the very simple and flat illustrated styles, more specifically from the artist <a href='https://georgetonks.com/'>George Tonks</a>.</p>
                    <Section title='My Moodboard' canOpen={true}>
                        <Gallery imgs={moodboardImages} />
                    </Section>
                </section>
                <section id='artistresearch'>
                    <h1>Artist Research</h1>
                    <p>I chose George Tonks to research for his colourful and approchable art style, which I think represents what I want my brand to be perfectly</p>
                </section>
                <div style={{ height: '1000vh' }} />
            </div>
        </>
    )
}

export default DrBarkers