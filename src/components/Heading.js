import '../styles/heading.scss'

const Heading = (props) => {

    return (
        <div className='heading'>
            <h2>{props.subtitle}</h2>
            <h1 className='outline'>{props.title}</h1>
            <h1 className='filled'>{props.title}</h1>
            <h1 className='outline'>{props.title}</h1>
        </div>
    )

}

export default Heading