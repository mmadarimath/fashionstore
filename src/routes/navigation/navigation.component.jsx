import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as WebLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                  <WebLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop' style={{color:'black'}}>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in' style={{color:'black'}}>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;