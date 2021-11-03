import { useEffect, useState } from 'react';
import '../styles/error404.scss'

const LENGTH = 14

// const Message = () => {
//     var rows = [];

//     var x = 0
//     var y = 0

//     for (var i = 0; i < LENGTH; i++) {


//         rows.push(<img className='error-message' style={{ top: `${x}%`, left: `${y}%` }} src='/assets/images/404/error.png' id={`error-message-${i}`} key={i} />);
//         x += 7.5
//         y += 3.75
//     }
//     return <div className='error-page'>{rows}</div>;
// }

const Error404 = () => {

    // const [playing, toggle] = useAudio('/assets/sounds/404/error.mp3');
    // const [audio] = useState(typeof Audio !== "undefined" && new Audio('/assets/sounds/404/error.mp3'))

    // useEffect(() => {
    //     for (let i = 0; i < LENGTH; i++) {
    //         setTimeout(() => {

    //             audio.play()
    //             const m = document.getElementById(`error-message-${i}`)
    //             m.style.visibility = 'visible'
    //         }, 50 * i)

    //     }
    // }, [])

    return (
        <div className='error-page'>
            <video width={window.innerWidth} height={window.innerHeight} autoPlay>
                <source src="/assets/videos/error.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Error404