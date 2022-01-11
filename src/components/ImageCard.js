import luxy from 'luxy.js'
import { useEffect, useState } from 'react'
// import arrow from '../images/arrow.svg'
import { Link } from "react-router-dom";

// import '../styles/imagecard.scss'

const ImageCard = ({ position, image, number, title, description, parentCallback, link }) => {

    let [hovered, setHovered] = useState('false');



    return (
        <div className='imagecard'
        >
            <div className={position}
                onMouseEnter={() => parentCallback('click')}
                onMouseLeave={() => parentCallback('scroll')}
            >
                <a style={{ textDecoration: 'none' }} className='imagecard-link' href={link}>
                    <img src={image} />
                </a>
                <h1 >{number}.</h1>
                <a className='inset' href={link} style={{ textDecoration: 'none' }}>
                    <h1 className='project-title'>{title}</h1>
                    <h2>{description} <img src={arrow} className='arrow' /> </h2>
                    {/* <h2>{hovered} pog?</h2> */}
                </a>
            </div>
        </div >
    )
}

export default ImageCard