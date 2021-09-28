import { useEffect, useRef, useState } from "react"
import '../styles/cursor.scss'
import scrollTooltip from '../images/scrollTooltip.png'
import clickTooltip from '../images/clickTooltip.png'
import { isMobile } from 'react-device-detect';

const Cursor = ({ parentTooltip }) => {

    // const [scrollTip, setScrollTip] = useState(true)
    const [tooltip, setTooltip] = useState('scroll')

    const delay = 18;

    const cursorVisible = useRef(true)
    const cursorEnlarged = useRef(false)
    // const cursorTooltip = useRef('scroll')

    const endX = useRef(window.innerWidth / 2)
    const endY = useRef(window.innerHeight / 2)
    const _x = useRef(0)
    const _y = useRef(0)

    const requestRef = useRef(null)

    const dot = useRef(null)
    const dotOutline = useRef(null)

    const [width, setWidth] = useState(window.innerWidth)

    setInterval(() => setTooltip(parentTooltip), 100)

    const toggleCursor = () => {
        if (cursorVisible.current) {
            dot.current.style.opacity = 1
            dotOutline.current.style.opacity = 1
        } else {
            dot.current.style.opacity = 0
            dotOutline.current.style.opacity = 0
        }
    }

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)'
        } else {
            dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)'

        }
    }

    const toggleTooltip = () => {

        if (!dotOutline) return

        if (tooltip == 'scroll') {
            // try {
            // cursorTooltip.current = 'scroll'
            dotOutline.current.src = scrollTooltip
            // } catch {
            console.log('error')
            // }

        }
        else if (tooltip == 'click') {
            // try {

            // cursorTooltip.current = 'click'
            dotOutline.current.src = clickTooltip
            // } catch {
            console.log('error')
            // }
        }
    }




    window.addEventListener('keydown', e => {
        toggleTooltip()
    })

    const mouseOverEvent = () => {
        cursorEnlarged.current = true
        toggleCursorSize()
    }

    const mouseOutEvent = () => {
        cursorEnlarged.current = false
        toggleCursorSize()
    }

    const mouseEnterEvent = () => {
        cursorEnlarged.current = true
        // console.log('yay?')
        toggleCursor()
    }

    const mouseLeaveEvent = () => {
        cursorEnlarged.current = false
        toggleCursor()
    }

    const mouseMoveEvent = e => {
        // cursorVisible.current = true
        // toggleCursor()

        // toggleTooltip(props.tooltip)

        endX.current = e.pageX
        endY.current = e.pageY

        dot.current.style.top = endY.current + 'px'
        dot.current.style.left = endX.current + 'px'
    }

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay
        _y.current += (endY.current - _y.current) / delay


        dotOutline.current.style.top = _y.current + 'px'
        dotOutline.current.style.left = _x.current + 'px'



        requestRef.current = requestAnimationFrame(animateDotOutline)
    }

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent)
        document.addEventListener('mouseup', mouseOutEvent)
        document.addEventListener('mousemove', mouseMoveEvent)
        document.addEventListener('mouseenter', mouseEnterEvent)
        document.addEventListener('mouseleave', mouseLeaveEvent)

        animateDotOutline()

        return () => {
            document.removeEventListener('mousedown', mouseOverEvent)
            document.removeEventListener('mouseup', mouseOutEvent)
            document.removeEventListener('mousemove', mouseMoveEvent)
            document.removeEventListener('mouseenter', mouseEnterEvent)
            document.removeEventListener('mouseleave', mouseLeaveEvent)

            cancelAnimationFrame(requestRef.current)
        }
    }, [])

    return (
        <>
            <img ref={dotOutline} className={`cursor-dot-outline ${isMobile ? 'hidden' : null}`} />
            <div ref={dot} className={`cursor-dot ${isMobile ? 'hidden' : null}`} />

        </>

    )

}

export default Cursor
// exports.toggleTooltip = toggleTooltip