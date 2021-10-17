import { useRef } from 'react';

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

const Section = (props) => {

    const ref = useRef(null)

    const executeScroll = () => ref.current.scrollIntoView()

    return (
        <section id={props.id} className='section'>
            <h1 onClick={() => { window.history.pushState({}, null, `#${props.id}`); executeScroll() }} ref={ref}>{titleCase(props.id.replace(new RegExp('-', 'g'), ' '))}</h1>
            {props.children}
            <hr style={{ margin: '20px auto', color: 'rgba(255, 255, 255, 0.25)', width: '120px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.25)' }} />
            {/* <p style={{ textAlign: 'center', textDecoration: 'italics' }}>***</p> */}
        </section>
    )
}

export default Section