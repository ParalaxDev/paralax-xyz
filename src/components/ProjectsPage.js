import Heading from './Heading'
import ListObject from './ListObject'

import '../styles/basicStyling.scss'



const ProjectsPage = ({ }) => {
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

export default ProjectsPage