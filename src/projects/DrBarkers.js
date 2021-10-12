import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'

import '../styles/basicStyling.scss'

import titleThumbnail from '../images/drbarkers.png'

const DrBarkers = () => {
    return (
        <>
            <ScrollingHeader title='DR BARKERS' image={titleThumbnail} />
            <div className='content-container'>
                <Heading title='BRIEF' subtitle='THE EXAM BRIEF' />
                <div style={{ height: '1000vh' }} />

            </div>
        </>
    )
}

export default DrBarkers