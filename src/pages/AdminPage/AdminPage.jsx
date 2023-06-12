import { NavLink, Outlet } from "react-router-dom";
import './AdminPage.scss'
import { useEffect } from "react";
import ReactGA from 'react-ga4';

export function AdminPage () {
    useEffect(() => {
        ReactGA.send({
            hitType:'pageview', 
            page:'admin'
        })
    }, [])

    return (
        <section>
            <div className="headerAdmin">
                <h1>Admin</h1>
                <nav>
                    <NavLink to='/admin/question'>Question</NavLink>
                    {/* <NavLink to='/admin/question'>Quizz</NavLink>
                    <NavLink to='/admin/question'>Cours</NavLink>
                    <NavLink to='/admin/question'>Thémes</NavLink> */}
                    <NavLink to='/admin/analitics'>Analitics</NavLink>
                </nav>
            </div>
            
            <Outlet />
        </section>
    )
}