import { useState } from "react"
import '../styles/gallery.scss'

const Modal = ({ selectedImage, setSelectedImage }) => {
    return (
        <div className='backdrop' onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt='enlarged picture' />
        </div>
    )
}

const Image = ({ src, className, }) => {

    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <>
            {selectedImage ? <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> : null}
            <img className={className} src={src} onClick={() => { setSelectedImage(src); console.log('clicked'); }} style={{ zIndex: '10' }} />

        </>
    )
}


export default Image