import ScrollingHeader from '../components/ScrollingHeader'
// import Heading from '../components/Heading'
import React, { useEffect } from 'react'
// import React from 'react'
import Gallery from '../components/Gallery';
import Subsection from '../components/Subsection'

// import '../styles/basicStyling.scss'
// import '../styles/gallery.scss'


import titleThumbnail from '../images/drbarkers.png'

import Section from '../components/Section';
import Image from '../components/Image';


const photosAtTateModern = ['https://i.ibb.co/0Df642Z/20211104-105446.jpg', 'https://i.ibb.co/P6d74dM/20211104-105454.jpg', 'https://i.ibb.co/NtYHJHL/20211104-105530.jpg', 'https://i.ibb.co/Vgq9Hr5/20211104-105641.jpg', 'https://i.ibb.co/db5Mx0h/20211104-105653.jpg', 'https://i.ibb.co/WvCL8Tp/20211104-105659.jpg', 'https://i.ibb.co/nCZQNKg/20211104-105705.jpg', 'https://i.ibb.co/nbhsDJd/20211104-105743.jpg', 'https://i.ibb.co/tZGcnmt/20211104-105759.jpg', 'https://i.ibb.co/n0Ptr6y/20211104-105829.jpg', 'https://i.ibb.co/hVX1sJb/20211104-105841.jpg', 'https://i.ibb.co/zSD15nW/20211104-105848.jpg', 'https://i.ibb.co/TcZLnpz/20211104-105903.jpg', 'https://i.ibb.co/3SDZJrT/20211104-105918.jpg', 'https://i.ibb.co/d05KF5M/20211104-105929.jpg', 'https://i.ibb.co/LrfB2gG/20211104-110049.jpg', 'https://i.ibb.co/djsQQBB/20211104-110129.jpg', 'https://i.ibb.co/yPfJ1qw/20211104-110310.jpg', 'https://i.ibb.co/FbrCPKC/20211104-110317.jpg', 'https://i.ibb.co/ThjJrqw/20211104-110326.jpg', 'https://i.ibb.co/NN7N9h3/20211104-110353.jpg', 'https://i.ibb.co/kQQkP1h/20211104-110525.jpg', 'https://i.ibb.co/dKRJ5Bz/20211104-110541.jpg', 'https://i.ibb.co/Smz8bF8/20211104-110605.jpg', 'https://i.ibb.co/Pz8Kxv8/20211104-110631.jpg', 'https://i.ibb.co/7zhZ27v/20211104-110917.jpg', 'https://i.ibb.co/dt3j191/20211104-110935.jpg', 'https://i.ibb.co/G2n929L/20211104-111000.jpg', 'https://i.ibb.co/mG3FZzf/20211104-111155.jpg', 'https://i.ibb.co/CH1jwGF/20211104-111305.jpg', 'https://i.ibb.co/p6H40Mp/20211104-111317.jpg', 'https://i.ibb.co/58tzQ4R/20211104-111328.jpg', 'https://i.ibb.co/J2zBfnp/20211104-111457.jpg', 'https://i.ibb.co/HV3ygB1/20211104-111556.jpg', 'https://i.ibb.co/gmBqRP6/20211104-111600.jpg', 'https://i.ibb.co/kgGmf67/20211104-111602.jpg', 'https://i.ibb.co/Bs62Vgk/20211104-111611.jpg', 'https://i.ibb.co/Tm0mSNg/20211104-112032.jpg', 'https://i.ibb.co/g386GNT/20211104-112034.jpg', 'https://i.ibb.co/DQWXzSx/20211104-112043.jpg', 'https://i.ibb.co/xzzp0rY/20211104-112104.jpg', 'https://i.ibb.co/nnMFHKF/20211104-112142.jpg', 'https://i.ibb.co/h7vFTYH/20211104-112145.jpg', 'https://i.ibb.co/vHtnDZN/20211104-112200.jpg', 'https://i.ibb.co/1T6yBY7/20211104-112215.jpg', 'https://i.ibb.co/GCyy00k/20211104-112217.jpg', 'https://i.ibb.co/KX5b2fN/20211104-112238.jpg', 'https://i.ibb.co/MD3Mf7k/20211104-112243.jpg', 'https://i.ibb.co/wd1tBm7/20211104-112247.jpg', 'https://i.ibb.co/qFrTsT6/20211104-112251.jpg', 'https://i.ibb.co/0fWJHPQ/20211104-112256.jpg', 'https://i.ibb.co/P1RJMB9/20211104-112512.jpg', 'https://i.ibb.co/NxP7wkc/20211104-112630.jpg',  'https://i.ibb.co/cDbLXKV/20211104-112940.jpg', 'https://i.ibb.co/6434ZsC/20211104-113141.jpg', 'https://i.ibb.co/zrPGfW1/20211104-113209.jpg', 'https://i.ibb.co/9YYH0XT/20211104-113256.jpg', 'https://i.ibb.co/JK97Nrt/20211104-113344.jpg', 'https://i.ibb.co/bH8FqLs/20211104-113406.jpg', 'https://i.ibb.co/1zxqGKR/20211104-113407.jpg', 'https://i.ibb.co/C0TPbrs/20211104-113540.jpg', 'https://i.ibb.co/RBHNVrX/20211104-113901.jpg', 'https://i.ibb.co/LY2wt14/20211104-113915.jpg', 'https://i.ibb.co/XpJHHxt/20211104-113919.jpg', 'https://i.ibb.co/qNmpt5C/20211104-113920.jpg', 'https://i.ibb.co/mTWkpM7/20211104-114035-0.jpg', 'https://i.ibb.co/jrJbx3s/20211104-114035.jpg', 'https://i.ibb.co/QJzDpzc/20211104-114058.jpg', 'https://i.ibb.co/qNPC7BG/20211104-114104.jpg', 'https://i.ibb.co/ypmVG0f/20211104-114155.jpg', 'https://i.ibb.co/tqN75wP/20211104-114210.jpg', 'https://i.ibb.co/Lt2K1ZV/20211104-114243.jpg', 'https://i.ibb.co/gWpmvn0/20211104-114248.jpg', 'https://i.ibb.co/Qrst1p3/20211104-114253.jpg', 'https://i.ibb.co/VwdZDvP/20211104-114258.jpg', 'https://i.ibb.co/MNy5TB3/20211104-114304.jpg', 'https://i.ibb.co/QXDKPcD/20211104-114310.jpg', 'https://i.ibb.co/vcLkC0L/20211104-114322.jpg', 'https://i.ibb.co/dcWrmz6/20211104-114330.jpg', 'https://i.ibb.co/qxTTKNq/20211104-114335.jpg', 'https://i.ibb.co/t2fZ7Kn/20211104-114339.jpg', 'https://i.ibb.co/7j3wNBP/20211104-114355.jpg', 'https://i.ibb.co/W3X6vnB/20211104-114511.jpg', 'https://i.ibb.co/s2HBhvG/20211104-114546.jpg', 'https://i.ibb.co/jgTntH7/20211104-114552.jpg', 'https://i.ibb.co/QQWyHzr/20211104-114615.jpg', 'https://i.ibb.co/0fxTGjq/20211104-114618.jpg', 'https://i.ibb.co/Q6y8S2n/20211104-114631.jpg', 'https://i.ibb.co/ZzsJjrN/20211104-114642.jpg', 'https://i.ibb.co/7t2CF18/20211104-114735.jpg', 'https://i.ibb.co/10syDKP/20211104-114801.jpg', 'https://i.ibb.co/qd84mp4/20211104-114822.jpg', 'https://i.ibb.co/30xYrz4/20211104-114859.jpg', 'https://i.ibb.co/7NWtKpk/20211104-114905.jpg', 'https://i.ibb.co/2dCG038/20211104-114908.jpg', 'https://i.ibb.co/K6Qmydr/20211104-115106.jpg', 'https://i.ibb.co/nfGj5fQ/20211104-115300.jpg', 'https://i.ibb.co/qs9xF5Z/20211104-115541.jpg', 'https://i.ibb.co/kJW8B95/20211104-115622.jpg', 'https://i.ibb.co/1fRBdMj/20211104-115701.jpg', 'https://i.ibb.co/mRFXFst/20211104-115739.jpg', 'https://i.ibb.co/VN3CVtF/20211104-115742.jpg', 'https://i.ibb.co/Z8xQQHb/20211104-115749.jpg', 'https://i.ibb.co/5BgSsJK/20211104-115803.jpg', 'https://i.ibb.co/VW5p5JZ/20211104-115817.jpg', 'https://i.ibb.co/k21hQcd/20211104-115827.jpg', 'https://i.ibb.co/jHJx88X/20211104-115845.jpg', 'https://i.ibb.co/1fWXS1p/20211104-115848.jpg', 'https://i.ibb.co/vBzRZVm/20211104-115855.jpg',  'https://i.ibb.co/qDvQn08/20211104-115906.jpg', 'https://i.ibb.co/71hZ9kb/20211104-115924.jpg', 'https://i.ibb.co/tQpnN2b/20211104-120109.jpg', 'https://i.ibb.co/zFf0QfF/20211104-120122.jpg', 'https://i.ibb.co/0n6505K/20211104-120154.jpg', 'https://i.ibb.co/d7pVPCs/20211104-120811.jpg']



const Kew = () => {
    return (
        <>
            <ScrollingHeader title='TATE MODERN' image={titleThumbnail} />



            <div className='text-container'>

                <Section id='tate' >

                <p>On Thursday the 4th of November, the Art students went to <a href='https://www.tate.org.uk/'>Tate Modern</a>, to help gather primary source photos, and to give us ideas for our other projects (<a href='/projects/drbarkers'>mine</a>)</p>
                <p>We first walked around the various galleries at Tate, taking photos of models, paintings and sculptures. As a graphics student, I was far more interested in the posters and typography that they used.</p>
                <p>We then went outside, and took pictures of the skyline, and landmarks. I once again took pictures of any advertising or posters that looked interesting</p>
                <Subsection id='primary-source-photos' />
                <p>Below are some of the photos that I took:</p>
                <Gallery imgs={photosAtTateModern} />
                <p>I love the wide varity of pieces that Tate Modern offers, from Sculptures, to Wire models. I especially loved the optical illusions, that helped to create a more engaging experience.</p>
                </Section>

                <Section id='outcomes' >
                    <p>I also came across a collection of Acrylic flags painted on canvas by Fred Wilson in 2009</p>
                    <p>Fred Wilson (born 1954) in the Bronx, New York is an American artist who describes himself as of "African, Native American, European and Amerindian" descent. He received a BFA from Purchase College, State University of New York. Wilson challenges colonial assumptions on history, culture, and race – encouraging viewers to consider the social and historical narratives that represent the western canon. Wilson received a MacArthur Foundation "genius grant" in 1999 and the Larry Aldrich Foundation Award in 2003. Wilson represented the United States at the Biennial Cairo in 1992 and the Venice Biennale in 2003.</p>
                    <Image className='divider-img' src='/assets/images/tate/flag (1).jpg' />
                    <Image className='divider-img' src='/assets/images/tate/flag (2).jpg' />
                    <Image className='divider-img' src='/assets/images/tate/flag (3).jpg' />
                    <p>I really loved the simplicity of the flags, and how Wilson has used very clean and precise lines or filled in spaces to indicate the different colours that are unable to be present in a monotone colour palette.</p>
                    <p>I then attempted to recreate some of his work using Azerbaijan, Israel, Macedonia, Panama, South Africa and Turkey as reference:</p>
                    <Image className='divider-img' src='/assets/images/tate/azerbaijan.png' />
                    <Image className='divider-img' src='/assets/images/tate/jerusalem.png' />
                    <Image className='divider-img' src='/assets/images/tate/macedonia.png' />
                    <Image className='divider-img' src='/assets/images/tate/panama.png' />
                    <Image className='divider-img' src='/assets/images/tate/south africa.png' />
                    <Image className='divider-img' src='/assets/images/tate/turkey.png' />

                    <p>I used a soft cream and a very dark blue instead of a more traditional monochrome colour palette, as it would be easier on the eyes, and helps to emulate the colour of canvas that Fred Wilson used.</p>


                </Section>
            </div>
        </>
    )
}

export default Kew