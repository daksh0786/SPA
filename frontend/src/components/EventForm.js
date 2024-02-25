import { useNavigate } from 'react-router-dom';
import { Form } from 'react-router-dom';
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }
// reason for changing Form from form is because Form do not send data to backend it directly 
// sends data to the action function which is similar to loader function which prevents browser request to send data to backend
//  here Form will send all the elements that are inside the Form element to action function
// this Form automatically triggers the action function that is on that path ie route ie url


// if i were to use <Form  action= '/sny other path' method='Post' className={classes.form}> 
// then this form triggers the action function  of that path
  return (
    <Form method= {method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : '' }/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : '' } />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : '' }/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : '' }/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
