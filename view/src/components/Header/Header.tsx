import { NavLink } from "react-router"

import HeaderStyles from "./Header.module.css"

export const Header = () => {
    return (
        <header className={ HeaderStyles.headerContainer }>
            <div className={ HeaderStyles.logo }>
                Stoq-IN-Casa
            </div>
            
            <nav className={ HeaderStyles.navArea }>
                <NavLink to='/'>Home</NavLink>

                <NavLink to='/lists'>Painel de Listas</NavLink>
            </nav>
        </header>
    )
}