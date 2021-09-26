import '../styles/button.scss'

const Button = (props) => {
    return (
        <div className='button-link'>
            <a href={props.link}>{props.text}   <span className='arrow'>➞</span></a>
        </div>
    )
}

export default Button