import '../styles/subheading.scss'

const Subheading = (props) => {

    return (
        <div className='subheading'>
            <h1 className='outline'>{props.title}</h1>
            <h1 className='filled'>{props.title}</h1>
            <h1 className='outline'>{props.title}</h1>
        </div>
    )

}

export default Subheading