import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import styles from './ProfilePage.module.scss'
import ReactGA from 'react-ga4'

export default function ProfilPage () {

    const { user, signout } = useContext(AuthContext);
    /* console.log(user); */
    const handleClick = () => {
        signout();
    }

    useEffect(() => {
        ReactGA.send({
            hitType:'pageview', 
            page:'/profile', 
            title: 'profile'
        })
    }, [])

    return (
        <div className={styles.profile}>
            <span>
                <i className={"fa-regular fa-user"}></i>
                <p> {user.pseudo} </p>
            </span>
            <div>
                <NavLink to='/' onClick={handleClick}>Déconnexion <i className={"fa-solid fa-right-from-bracket"}></i></NavLink>
            </div>
        </div>
    )
}