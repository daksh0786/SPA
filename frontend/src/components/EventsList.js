// import { useLoaderData } from 'react-router-dom';
import classes from './EventsList.module.css';
import { Link } from 'react-router-dom';
function EventsList({events}) {
  // const event = useLoaderData();
  // like explained in EventsPage we can use it directly here as this component is defined
  // in the lower level than the component in which the loader function is defined
  // here event is an object as we are geing an oject from this loader.
  
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
