import ScrollingHeader from '../components/ScrollingHeader'

import '../styles/basicStyling.scss'

const DrBarkers = () => {
    return (
        <>
            {/* <div style={{ height: '40vh' }} /> */}
            <div className='header-container'>
                <ScrollingHeader title='DR BARKERS' image='https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' />
            </div>
            <div style={{ height: '1000vh' }} />
        </>
    )
}

export default DrBarkers