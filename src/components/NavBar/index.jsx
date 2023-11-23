import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

const NavBar = ({user, setUser}) => {
    const _handleLogOut = () => {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
             <Link to="/notes">Notes</Link>
            <span> </span>
            <span>Welcome, { user.name }</span>
            <span> </span>
            <Link to="" onClick={ _handleLogOut }>Log Out</Link>
        </nav>
    );
};

export default NavBar;