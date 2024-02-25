import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventsItem from "../components/EventItem";

export default function EventDetailPage() {
    const data = useRouteLoaderData("user-event");
    // console.log(data)
    return <>
        <EventsItem method = 'DELETE' event = {data.event} />
    </>
}
// here we cant use hooks in loader to get the value from useParams function 
// defined above so react router which call this loader function passes two parameter that is defined below

// here react router call this loader functon which helps us to extract all data from 
// request url and parma pased and this is not valid for this loader but for all loader function.

export async function loader({request,params}) {

    const id = params.someId;

    const response = await fetch('http://localhost:8080/events/' + id);

    if(!response.ok)
    {
        throw json({message:'Counld not fetch the details for selected events'},{status:'500'});
    }
    else 
    {
        // console.log(response);
        return response; 
    }

}

export async function action({request,params}){
    
    const eventId = params.someId;
    const url ='http://localhost:8080/events/' + eventId
    console.log(request.method)
    console.log(url)
    const response = await fetch(url,{
        method:request.method   
        // method : 'DELETE'
    });


    if(!response.ok)
    {
        throw json({message:'Counld not delete the event'},{status:'500'});
    } 

    return redirect("/events")
}