import classes from './EventItem.module.css';
import { Link,Form} from 'react-router-dom';

function EventItem({ event,method }) {

  console.log(event)
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <Form method= {method}>
        <button >Delete</button>
        </Form>
      </menu>
    </article>
  );
}

export default EventItem;
