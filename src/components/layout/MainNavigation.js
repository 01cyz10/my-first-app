import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <>
      <nav className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>All Meetups</Link>
            </li>
            <li>
              <Link to='/new-meetups'>New Meetings</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>
      </nav>
    </>
  );
}
export default MainNavigation;
