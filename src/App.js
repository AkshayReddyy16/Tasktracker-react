import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import {useState} from "react"
import AddTask from "./Components/AddTask";
function App() {
  const [showAddTask,setShowAddTask]=useState(true)
  const [tasks,setTasks]=useState([
    {
      id:1,
      text:"Doctor's appointment",
      day:"Feb 5th 2:30pm",
      reminder:true,
  },
  {
      id:2,
      text:"Meeting at school",
      day:"Feb 6th 2:30pm",
      reminder:true,
  },
  {
      id:3,
      text:"Food shopping",
      day:"Feb 7th 2:30pm",
      reminder:false,
  }
]
  )
  //Add Task
  const addTask=(task)=>{
    const id =Math.floor(Math.random()*10000+1)
    const newTask={id, ...task}
    setTasks([...tasks,newTask])

  }
//delete Task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))

}
//toggle remainder
const toggleRemainder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id ?{...task,reminder:!task.reminder}:task))

}
  return (
    <div className="container">
    <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
    {showAddTask &&<AddTask onAdd={addTask}/>}
  {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>:'No Tasks'}
    
    </div>
  );
}
export default App;
