import { useState } from 'react'
import '../styles/section.scss'

const Section = (props) => {

    const [open, setOpen] = useState(false)

    const togglePanel = (e) => {
        setOpen(!open)
    }

    return (
        <section id={props.id} className='section'>
            <h1 onClick={(e) => togglePanel(e)} className='header'>{props.title}</h1>
            {open ? (
                <div className='content'>
                    {props.children}
                </div>
            ) : null}
            {/* {props.children} */}
        </section>
    )
}

export default Section