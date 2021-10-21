import { useEffect, useState, useRef } from "react";
import { useScroll } from "../hooks/useScroll";
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
    const { y, x, scrollDirection } = useScroll();


    useEffect(() => {
        const ele = []
        const allElements = document.getElementsByClassName("section")
        for (var i = 0, len = allElements.length; i < len; i++) {
            ele.push(allElements[i].id)
        }
        setElements(ele)
        console.log(ele)

    }, [])

    const styles = {
        active: {
            visibility: "visible",
            transition: "all 0.5s"
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)"
        }
    }


    return (
        <header style={scrollDirection === "down" ? styles.active : styles.hidden}>
            {/* <div className='left'> */}
            <a href='/'>🠐 Back</a>
            <nav>
                <ul className='nav-links'>
                    {elements.map((item, i) => {
                        return <li><a key={i} href={`#${item}`}>{titleCase(item.replace(new RegExp('-', 'g'), ' '))}</a></li>
                    })}
                </ul>
            </nav>
            {/* <a className='cta' href='#'><button>To The Top</button></a> */}
        </header >
    )
}

export default Navbar