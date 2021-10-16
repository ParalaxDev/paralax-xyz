import { useState } from "react"
import '../styles/gallery.scss'

const Modal = ({ selectedImage, setSelectedImage }) => {
    return (
        <div className='backdrop' onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt='enlarged picture' />
        </div>
    )
}

const Image = ({ src, className, style }) => {

    const [selectedImage, setSelectedImage] = useState(null)

    console.log(style)

    return (
        <>
            {selectedImage ? <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> : null}
            <img className={className} style={style} src={src} onClick={() => { setSelectedImage(src); console.log('clicked'); }} />

        </>
    )
}


export default Image