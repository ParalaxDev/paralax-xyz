// import ContourMap from '../components/ContourMap';
// import '../styles/general.scss'
// import '../styles/homepage.scss'

import { useState } from "react";
import { RandomReveal } from 'react-random-reveal'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const Homepage = () => {


    const [title, setTitle] = useState('PARALAX')


    const generateRandomTitle = () => {
        const final = title

        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var test = '';
        var result = '';
        var charactersLength = characters.length;
        const finalArray = []

        for (let j = 0; j < final.length; j++) {
            result = '';

            for (var i = 0; i < final.length - j - 1; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }

            test = final.slice(0, j + 1);


            console.log(test + result)
            finalArray.push(test + result)
        }


        return finalArray

    }

    const titleArray = () => {
        setTitle('PARALAX')
        const titleArray = generateRandomTitle()

        for (let i = 0; i < titleArray.length; i++) {
            const element = titleArray[i];

            setTimeout(() => {

                setTitle(titleArray)
            }, 20)

        }

    }

    return (
        <>
            <div id="landing-page">
                <video autoplay='true' muted disablePictureInPicture loop id="bg-video">
                    <source class="video-center" src="/assets/videos/test2.mp4" type="video/mp4" width="100vw" />
                </video>
                <div className='vertical-center'>
                    <div className="text-group">
                        <h1 className='primary-colour'><RandomReveal isPlaying duration={0.5} characters={title} revealDuration={1 - (1 / 7)} characterSet={[
                            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
                        ]} /></h1>
                        <h3 className='secondary-colour'>Graphic Design <span className='primary-colour'>//</span> Programming</h3>
                    </div>
                </div>
                <div className="video-overlay" />
                {/* <image src='/assets/images/test.png' class='bg-image' /> */}
            </div>
            <div style={{ height: '100vh' }} />
        </>
    )
}

export default Homepage