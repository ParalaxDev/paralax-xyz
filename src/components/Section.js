import { useState } from 'react'
import '../styles/section.scss'

const Section = (props) => {

    const [open, setOpen] = useState(false)

    const togglePanel = (e) => {


        setOpen(!open)

    }

    return (
        <section id={props.id} className='section'>
            <p style={{ cursor: 'pointer', userSelect: 'none' }} onClick={(e) => togglePanel(e)} className='header'>{open ? '▼' : '➤'} {props.title}</p>
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