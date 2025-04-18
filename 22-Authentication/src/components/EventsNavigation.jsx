import classes from './EventsNavigation.module.css';
import {NavLink, useRouteLoaderData} from "react-router";

function EventsNavigation() {
  const token=useRouteLoaderData('root')
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
                to="/events"
                className={({isActive})=>isActive ? classes.active : undefined}
                end
            >All Events</NavLink>
          </li>
          {token && (
              <li>
                <NavLink
                    to="new"
                    className={({isActive})=>isActive ? classes.active : undefined}
                    end
                >New Event</NavLink>
              </li>
          )}

        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
