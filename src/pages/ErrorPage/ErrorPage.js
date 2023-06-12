import { NavLink, useRouteError } from "react-router-dom"
import styles from './ErrorPage.module.scss'
import ReactGA from 'react-ga4';

export default function ErrorPage () {
    const error = useRouteError();

    useEffect(() => {
        ReactGA.send({
            hitType:'pageview', 
            page:'errorPage'
        })
    }, [])

    return (
        <>  
            <div className={`${styles.errorPage}`}>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div>
                <h1>{error.message || error.statusText}</h1>
            </div>
        </>
    )
}