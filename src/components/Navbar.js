import { useEffect, useState, useRef } from "react";
import '../styles/navbar.scss'

const titleCase = (str) => {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

const Navbar = () => {


    const [elements, setElements] = useState(['test'])

    useEffect(() => {
        const ele = []
        const allElements = document.getElementsByClassName("section")
        for (var i = 0, len = allElements.length; i < len; i++) {
            ele.push(allElements[i].id)
        }
        setElements(ele)
        console.log(ele)

    }, [])

    return (
        <div className='navbar'>
            {/* <div className='left'> */}
            <a href='/'>Paralax</a>
            {/* </div> */}
            {/* <div className='right'> */}
            {elements.map((item, i) => {
                console.log(item);
                // return <a key={i} onClick={() => { window.history.pushState({}, null, `#${item}`); document.getElementById(item).scrollIntoView(); }}><span className='hash'>#</span> {titleCase(item.replace(new RegExp('-', 'g'), ' '))}</a>
                return <a key={i} href={`#${item}`}>{titleCase(item.replace(new RegExp('-', 'g'), ' '))}</a>
            })}
            {/* </div> */}
        </div>
    )
}

export default Navbar