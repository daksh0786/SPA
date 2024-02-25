import { useRouteLoaderData, json,redirect} from "react-router-dom"
import EventForm from "../components/EventForm";

export default function EditEventPagePage() {

    const data = useRouteLoaderData("user-event");
    
    // here we are getting error because the useloaderdata function search
    //  loader function in edit rather in :someId where our loader is stored
    // to counter this we use a different function ie useRouteLoaderData which takes 
    // an id of the component from where loader is to take;

    return <>
        
        <EventForm method = "patch" event = {data.event} />
    
    </>
}
export async function action({request,params}){

    const eventId = params.someId;
    const data = await request.formData();

    const enteredData ={
        title:data.get('title'),
        image: data.get('image'),
        description: data.get('description'),
        date: data.get('date')
    }
    
    const url ='http://localhost:8080/events/' + eventId;
    console.log(url)
    console.log(request.method )
    const response = await fetch(url,{
        method:request.method, 
        // method : 'DELETE'
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(enteredData)
    });

    if(!response.ok)
    {
        throw json({message:'Counld not Change the event'},{status:'500'});
    } 

    return redirect("/events")
}