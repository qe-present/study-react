import NewTask from "./NewTask.jsx";

export default function Tasks() {
    return (
        <section>
            <h2 className='text-2xl font-bold text-left-700 mb-4'>Tasks</h2>
            <NewTask></NewTask>
            <p className='text-stone-800 my-4 '>this project does not have ant tasks yet.</p>
            <ul></ul>
        </section>
    )
}
