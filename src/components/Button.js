// import '../styles/button.scss'
// import arrow from '../images/arrow.svg'

const Button = (props) => {
    return (
        <div className='button-link'>
            <a href={props.link}>{props.text}   <img src={arrow} className='arrow' /> </a>
        </div>
    )
}

export default Button