import {HashRouter as  Router, Routes, Route } from 'react-router'
import './App.css';
import Home from "./components/home";
import TaskList from "./components/TaskList";
import TaskDetail from './components/TaskDetail';


function App() {

  return (
    <>
      <div>
        <Router> 
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tasks/:Id" element={<TaskDetail />} />
            <Route path="/TaskList" element={<TaskList />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
