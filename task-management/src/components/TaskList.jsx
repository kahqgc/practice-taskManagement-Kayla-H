import { Link} from "react-router-dom";

let tasks = [
    { Id: 1, Title: "Laundry", Description: "Use detergent, fabric softener, and water. Then dry the clothes." },
    { Id: 2, Title: "Grocery Shopping", Description: "Buy milk, eggs, and bread." },
    { Id: 3, Title: "Gym", Description: "Attend the 6 PM yoga class." }
];

export default function TaskList() {
    const taskList = tasks.map((task, index) => { //map through tasks
        return (
                <ul id="task-list">
                    <li key={index}>
                        <Link to={`/tasks/${task.Id}`}>{task.Title}</Link>
                        </li>
                </ul>
        );
    });
    return <div><h1>Displaying Details for Task:</h1>
        {taskList} </div>
}