// import { Link } from "react-router-dom";

// const PRODUCTS = [
//   { id: "p1", title: "Product 1" },
//   { id: "p2", title: "Product 2" },
//   { id: "p3", title: "Product 3" },
// ];

// export default function EventsPage() {
//   return (
//     <>
//       <h1>this is the events page</h1>
//       <ul>
//         {PRODUCTS.map((prod) => (
//           <li key = {prod.id}>
//                 <Link to={`/events/${prod.id}`}>{prod.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
import EventsList from "../components/EventsList";
import { useLoaderData , json } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();
  // this returns the value itself not a promise and here the events we get is actually an object
  // so we want an the property events of events object
  // we can use data of useLoaderData anywhere in the components which are on the same level
  // or the lower level from the component where we added loader function.
  // like we can use this loader function on eventsList only.
  // it cant be used on the higher level from its defination.

  if (events.isError) {
    return <p>{events.message}</p>;
  }

  return (
    <>
      <EventsList events={events.events} />
      {/* <EventsList /> */}
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.'}
    // throw new response(
    // JSON.stringify({ message: "Could not fetch the data." }),
    // { status: 500 }
    // )
    throw json({ message: "Could not fetch the data." }, { status: 500 });
    // here we can pass our response in this form also and while accessing it we donot neet to use parse

  } else {
    const resData = await response.json();
    return resData;
  }
}
// use hooks cant be used in loader component all other browser function works in
// loader and it works on browser not on server as it is not an backend code
