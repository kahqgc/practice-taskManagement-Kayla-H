import { useParams } from "react-router-dom";


let tasks = [
    { Id: 1, Title: "Laundry", Description: "Use detergent, fabric softener, and water. Then dry the clothes." },
    { Id: 2, Title: "Grocery Shopping", Description: "Buy milk, eggs, and bread." },
    { Id: 3, Title: "Gym", Description: "Attend the 6 PM yoga class." }
];

export default function TaskDetail(){
    const {id} = useParams(); //grabs ID from url as a string
    const selectedTask = tasks.filter((task)=> task.Id===Number(id)) //converts id to a number to match task.Id
    const task = selectedTask[0]

    if (!task){
        return <p>Task Not Found</p>
    }


    return (
        <div>
            <h1>{task.Title}</h1>
            <p>{task.Description}</p>
        </div>
    )

};