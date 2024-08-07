import React, { useState } from 'react'


const ListMain = () => {
    const [task, settask] = useState("")
    const [tasks, settasks] = useState([])
    const [show,setshow] = useState({idx:null})
    const [btntext,setBtntext]=useState("ADD TASK")

    const submitHandle = (e) => {
        e.preventDefault()
        settasks([...tasks, { task }]);
        settask("")
    }

    const deleteTask = (i) => {
        let copyTask = [...tasks]
        copyTask.splice(i, 1)
        settasks(copyTask) 

    }

    const editTask = (i)=>{
        setBtntext("UPDATE TASK")
        settask(tasks[i].task)
       setshow({idx:i})
      
       
    }

    const updateTask=()=>{
        let copyTask = [...tasks]
        copyTask.splice(show.idx,1,{task})
        settasks(copyTask) 
        settask("");
        setBtntext("ADD TASK")
    }
    console.log("tasks=>",tasks);
    return (
        <>
            <div className='m-2'>
                <div className='flex justify-center w-full'>
                    <input type='text' placeholder='Add task' className='lg:text-2xl border-zinc-800 border-2 m-4  px-2'
                        value={task}
                        onChange={(e) => {
                            settask(e.target.value)
                        }}
                    />
                    <button onClick={btntext=="ADD TASK" ?submitHandle:updateTask} className='bg-green-700 text-white p-2 lg:text-2xl font-bold rounded '>{btntext}</button>
              
                 </div>

            </div>

            <div className='bg-slate-200 p-2 lg:p-8'>

                {
                    tasks && tasks.map((item, i) => {
                        return (
                            <li key={i} className='flex justify-around lg:items-center lg:justify-between'>
                                <div className='w-60 h-6 lg:w-full border-black border-b'>{item.task}</div>
                                <button onClick={() => {
                                    deleteTask(i)
                                }} className='bg-red-400 text-white px-4 py-2 rounded mb-2 mr-2 ml-2'>Delete</button>

                                <button onClick={()=>{
                                    editTask(i)
                                }} className='bg-green-400 text-white px-4 py-2 rounded mb-2'>Edit</button>
                            </li>

                        )
                    })
                }
            </div>
        </>
    )
}

export default ListMain

