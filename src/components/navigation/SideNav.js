import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SideNavData } from './SideNavData';
import './SideNav.css';
import NavBar from './NavBar';



const SideNav = () => {

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                {/* <div className='navbar'>
                </div> */}
                <NavBar />

                <nav className='nav-menu'>
                    <ul className='nav-menu-items'>
                        <p className='navbar-title'>
                            E-commerce
                        </p>
                        {SideNavData.map((item, index) => {
                            return (
                                <li key={index} className='nav-text'>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default SideNav