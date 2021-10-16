import '../styles/scrollingheader.scss'
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion'



const GenerateText = (props) => {
    var words = [];
    for (var i = 0; i < 20; i++) {
        if (i % 2 == 0) {

            words.push(<h1 className={`outline block`}>{props.title}</h1>);
        } else {
            words.push(<h1 className={`filled block`}>{props.title}</h1>);

        }
    }
    return words;
}

const ScrollingHeader = (props) => {

    const [scrolledAmount, setScrolledAmount] = useState(0)

    const onScroll = (e) => {
        setScrolledAmount(Math.floor(window.scrollY) / 2)
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);


    return (
        <div className='scrolling-header'>
            <div className='row' style={{ transform: `translate(calc(${scrolledAmount}px - 50%))`, zIndex: '2' }}>
                <GenerateText type='filled' title={props.title} />
            </div>
            <div className='row' style={{ transform: `translate(calc(${-scrolledAmount}px + 50% ))` }}>
                <GenerateText type='outline' title={props.title} />
            </div>
            {/* <img src={props.image} /> */}
        </div>
    )
}

export default ScrollingHeader