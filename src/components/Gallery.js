import { useState } from 'react'
import '../styles/gallery.scss'


const Modal = ({ selectedImage, setSelectedImage }) => {
    return (
        <div className='backdrop' onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt='enlarged picture' />
        </div>
    )
}

const Gallery = ({ imgs }) => {

    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <>
            {selectedImage ? <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> : null}
            <div className='gallery'>
                {imgs.map((item, i) => {
                    // console.log(item)
                    return <img key={i} src={item} className='images' onClick={() => setSelectedImage(item)} />
                })}
            </div>
        </>
    )
}

export default Gallery