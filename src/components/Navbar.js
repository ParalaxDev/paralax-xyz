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


            const allSubElements = allElements[i].getElementsByClassName("subsection")
            // console.log(`---${allElements[i].id}---`)

            ele.push({
                "section": allElements[i].id,
                "subsections": [

                ]
            })

            for (var j = 0, len2 = allSubElements.length; j < len2; j++) {
                // console.log(allSubElements[j].id)
                ele[i].subsections.push(allSubElements[j].id)
            }
            // ele.push(allElements[i].id)
        }
        setElements(ele)
        // console.log(ele)

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

    // 

    return (
        <header className='navbar' >
            {/* <div className='left'> */}
            <a href='/' className='logo'>Paralax</a>
            <nav>
                <ul className='nav-links'>
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <div className='menu'>
                        {elements.map((item, i) => {
                            if (item.section) {

                                const subsections = []

                                try {
                                    if (item['subsections'].length != 0) {
                                        item['subsections'].map((test, k) => {
                                            subsections.push(test)
                                        })
                                    }
                                } catch {
                                    // console.log('OH NO AN ERROR')
                                }

                                return (
                                    <li className='dropdown-content'>
                                        <a key={i} href={`#${item['section']}`}>{titleCase(item['section'].replace(new RegExp('-', 'g'), ' '))}</a>
                                        <ul className='dropdown'>
                                            {subsections.map((item, i) => {
                                                console.log(item)
                                                return <li><a href={`#${item}`}>{titleCase(item.split('--')[0].replace(new RegExp('-', 'g'), ' '))}</a></li>
                                            })}
                                        </ul>
                                    </li>
                                )
                            }
                        })}
                    </div>
                </ul>
            </nav>
            {/* <a className='cta' href='#'><button>To The Top</button></a> */}
        </header >
    )
}

export default Navbar