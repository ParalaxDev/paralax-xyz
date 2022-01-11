import { useState, useEffect } from 'react'
// import '../styles/gallery.scss'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Modal = ({ selectedImage, setSelectedImage }) => {
    return (
        <div className='backdrop' onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt='enlarged picture' />
        </div>
    )
}

const Gallery = ({ imgs, columnOverride }) => {

    const [selectedImage, setSelectedImage] = useState(null)
    const [ref, inView] = useInView()

    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])



    const container = {
        visible: {

            transition: {
                delayChildren: 1,
                staggerChildren: 0.05
            }
        }
    }

    const child = {
        hidden: { opacity: 0 },
        visible: {
            // y: 0,
            opacity: 1
        }
    }

    return (
        <>
            {selectedImage ? <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> : null}
            <motion.div className='gallery'
                variants={container}
                initial="hidden"
                // animate="visible"
                ref={ref}
                animate={controls}
                style={{ columnCount: columnOverride ? columnOverride : '' }}
            >
                {imgs.map((item, i) => {
                    // console.log(item)
                    return <motion.img
                        variants={child}
                        whileHover={{ y: -7.5, boxShadow: '0px 10px 28px 15px rgba(0,0,0,0.18)' }}
                        key={i} src={item} className='images' onClick={() => setSelectedImage(item)} />
                })}
            </motion.div>
        </>
    )
}

export default Gallery