import '../styles/listobject.scss'
import arrow from '../images/arrow.svg'

const ListObject = ({ year, title, description, link }) => {
    return (
        <div className='list-object'>
            <h2>{year}</h2>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <img src={arrow} className='arrow' />
        </div>
    )
}

export default ListObject