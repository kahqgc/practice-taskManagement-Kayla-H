import { Link } from "react-router-dom";
import "./TaskList.css"

let tasks = [
    { Id: 1, Title: "Laundry", Description: "Use detergent, fabric softener, and water. Then dry the clothes." },
    { Id: 2, Title: "Grocery Shopping", Description: "Buy milk, eggs, and bread." },
    { Id: 3, Title: "Gym", Description: "Attend the 6 PM yoga class." }
];

export default function TaskList() {
    return (
        <div>
            <h1>Task List</h1>
            <ul id="task-list">
                {tasks.map((task, index) => ( //map through tasks
                    <li key={index} className="task-item">
                        <Link to={`/tasks/${task.Id}`}>{task.Title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};