import luxy from 'luxy.js'
import { useEffect, useState } from 'react'
import arrow from '../images/arrow.svg'
import { toggleTooltip } from './Cursor'

import '../styles/imagecard.scss'

const ImageCard = ({ position, image, number, title, description, parentCallback }) => {

    let [hovered, setHovered] = useState('false');



    return (
        <div className='imagecard'
        >
            <div className={position}
                onMouseEnter={() => parentCallback('click')}
                onMouseLeave={() => parentCallback('scroll')}
            >
                <img src={image} />
                <h1 >{number}.</h1>
                <div className='inset'>
                    <h1 className='project-title'>{title}</h1>
                    <h2>{description} <img src={arrow} className='arrow' /> </h2>
                    {/* <h2>{hovered} pog?</h2> */}
                </div>
            </div>
        </div >
    )
}

export default ImageCard