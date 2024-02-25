import EventForm from '../components/EventForm.js'
import { json,redirect } from 'react-router-dom';

export default function NewEventPage() {
    return <>
        <EventForm method ='POST' />

    </>
}
// loader and action function both takes objects as a parameter
export async function action({request,params}){

    const data = await request.formData();

    const enteredData ={
        title:data.get('title'),
        image: data.get('image'),
        description: data.get('description'),
        date: data.get('date')
    }
    console.log(enteredData)
    console.log("RAM")
    const response = await fetch('http://localhost:8080/events',{
        method:request.method,
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(enteredData)
    })

    if(!response.ok)
    {
        throw json({message: 'An error occured while posting'},{
            status:500
        })
    }
    
    return redirect('/events');

}