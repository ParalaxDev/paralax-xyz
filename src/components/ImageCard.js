import '../styles/imagecard.scss'

const ImageCard = (props) => {
    return (
        <div className='imagecard left'>
            <img src={props.image} />
            <h1 >{props.number}.</h1>
            <div className='inset'>
                <h1 className='project-title'>{props.title}</h1>
                <h2>{props.description}</h2>
            </div>
        </div>
    )
}

export default ImageCard