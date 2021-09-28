import Heading from './Heading'
import ListObject from './ListObject'





const ProjectsPage = ({ }) => {
    return (
        <>

            <div style={{ height: '5vw' }} />
            <Heading title='WORK' subtitle='ALL PROJECTS' />
            <ListObject link='/projects/drbarkers' year="'20-21" title="Dr Barker's Dog Food" description='GCSE Brief' />
            <ListObject link='/projects/kew' year="'20-21" title='Kew Gardens' description='GCSE Brief' />

        </>
    )
}

export default ProjectsPage