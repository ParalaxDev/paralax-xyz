import { useEffect, useState } from 'react';
import '../styles/error404.scss'



const Error404 = () => {


    return (
        <div className='error-page'>
            <h1>Error 404</h1>
            <h2>The page is missing or was never written. You can wait and see if it becomes available again, or you can restart your computer.</h2>
            <ul>
                <li>Send us an e-mail to notify this and try it later</li>
                <li>Press CTRL+ALT+DEL to restart you're computer. You will lose any unsaved information in any programs that are running.</li>
                <li>Return to a previous page and continue from there.</li>
            </ul>
            <a href='/'>home</a>
        </div>
    )
}

export default Error404