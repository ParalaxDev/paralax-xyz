import Heading from '../components/Heading'
import ListObject from '../components/ListObject'

// import '../styles/basicStyling.scss'



const Projects = ({ }) => {
    return (
        <>

            <div style={{ height: '5vw' }} />
            <div className='content-container'>
                <Heading title='WORK' subtitle='ALL PROJECTS' />
                <ListObject link='/projects/drbarkers' year="'21" title='Dr Barkers' description='GCSE Brief' />
                <ListObject link='/projects/kew' year="'21" title='Kew Gardens' description='GCSE Brief' />
                <ListObject link='/projects/typography' year="'20" title="Typography" description='GCSE Project' />
            </div>
        </>
    )
}

export default Projects