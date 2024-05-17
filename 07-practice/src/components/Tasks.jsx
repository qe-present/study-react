import NewTask from "./NewTask.jsx";

export default function Tasks({tasks,onAddTask, onDeleteTask}) {
    return (
        <section>
            <h2 className='text-2xl font-bold text-left-700 mb-4'>Tasks</h2>
            <NewTask onAddTask={onAddTask}></NewTask>
            {tasks.length === 0 && <p className='text-stone-800 my-4 '>this project does not have ant tasks yet.</p>}
            {tasks.length > 0 &&
                <ul className='p-4 mt-8 rounded-md bg-stone-100'>
                    {tasks.map((task) => (
                        <li key={task.id} className='flex my-4 justify-between'>
                            <span className='text-stone-800'>{task.text}</span>
                            <button className='text-stone-700 hover:text-red-500' onClick={() => onDeleteTask(task.id)}>Clear</button>
                        </li>
                    ))}
                </ul>}
        </section>
    )
}
