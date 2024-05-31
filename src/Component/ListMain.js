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
        console.log("idx",show.idx);
        let copyTask = [...tasks]
        copyTask.splice(show.idx,1,{task})
        settasks(copyTask) 
        console.log("copy=>",copyTask);
        setBtntext("ADD TASK")
    }
    console.log("tasks=>",tasks);
    return (
        <>
            <div  >
                <div className='flex justify-center w-full'>
                    <input type='text' placeholder='Add task' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
                        value={task}
                        onChange={(e) => {
                            settask(e.target.value)
                        }}
                    />
                    <button onClick={btntext=="ADD TASK" ?submitHandle:updateTask} className='bg-green-700 text-white px-4 py-3 text-2xl font-bold rounded m-5'>{btntext}</button>
              
                 </div>

            </div>

            <div className='bg-slate-200 p-8'>

                {
                    tasks && tasks.map((item, i) => {
                        return (
                            <li key={i} className='flex items-center justify-between'>
                                <div className='mb-5 w-full border-black border-b'>{item.task}</div>
                                <button onClick={() => {
                                    deleteTask(i)
                                }} className='bg-red-400 text-white px-4 py-2 rounded mb-10 mr-2 ml-2'>Delete</button>

                                <button onClick={()=>{
                                    editTask(i)
                                }} className='bg-green-400 text-white px-4 py-2 rounded mb-10'>Edit</button>
                            </li>

                        )
                    })
                }
            </div>
        </>
    )
}

export default ListMain

