// import '../styles/listobject.scss'
import arrow from '../images/arrow.svg'
import { Link } from "react-router-dom";

const ListObject = ({ year, title, description, link }) => {
    return (
        <Link className='list-object' to={link}>
            <h2 className='list-year'>{year}</h2>
            <h1 className='list-title'>{title}</h1>
            <h2 className='list-description'>{description}</h2>
            <img src={arrow} className='arrow' />
        </Link >
    )
}

export default ListObject