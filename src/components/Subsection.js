import { useEffect, useRef, useState } from "react";

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

const Subsection = (props) => {
    const [parentId, setParentId] = useState('test')

    const getParentId = (e) => {
        let a = e.target.parentNode.getAttribute("id");
        setParentId(a)
        return a
    }


    const ref = useRef(null)

    const executeScroll = () => ref.current.scrollIntoView()

    const generateTextFromId = (id) => {


        const splitId = id.split('--')[1]

        if (splitId) {
            return titleCase(splitId.replace(new RegExp('-', 'g'), ' '))

        } else {
            return titleCase(id.replace(new RegExp('-', 'g'), ' '))
        }

    }

    return (
        // <section id={props.id} className='subsection'>
        <a href={`#${props.id}`}><h2 ref={ref} id={`${props.id}`} className='subsection'>{generateTextFromId(props.id)}</h2></a>
        // </section>
    )

}

export default Subsection