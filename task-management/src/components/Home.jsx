import {Link} from "react-router-dom"

export default function Home(){
    return(
        <>
            <h1>Welcome to your Task List</h1>
            <Link to="/">Home</Link><br />
            <Link to="/TaskList">Task List</Link><br />
        </>
    )
}