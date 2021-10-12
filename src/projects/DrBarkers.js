import ScrollingHeader from '../components/ScrollingHeader'
import Heading from '../components/Heading'

import '../styles/basicStyling.scss'

import titleThumbnail from '../images/drbarkers.png'

const DrBarkers = () => {
    return (
        <>
            <div className='content-container'>
                <ScrollingHeader title='DR BARKERS' image={titleThumbnail} />
                <Heading title='BRIEF' subtitle='THE AQA BRIEF' />
                <div style={{ height: '1000vh' }} />

            </div>
        </>
    )
}

export default DrBarkers