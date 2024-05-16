import Input from './Input';
import {useRef} from 'react';
import Model from "./Model.jsx";

export default function NewProject({onAddedProject,onCancel}) {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()
    const modalRef = useRef()

    function handleSave() {
        let enterTitle = titleRef.current.value
        let enterDescription = descriptionRef.current.value
        let enterDueDate = dueDateRef.current.value
        if (enterTitle.trim() === '' || enterDescription.trim() === '' || enterDueDate.trim() === '') {
            modalRef.current.open()
            return
        }
        onAddedProject({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate
        })
    }

    return (
        <>
            <Model ref={modalRef} buttonCaption='OKay'>
                <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
                <p className='text-stone-400 mb-4'>Oops! ... looks like you forget to enter a value.</p>
                <p className='text-stone-400 mb-4'>Please make sure provide a value for input fields.</p>
            </Model>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button className='px-6 py-2 rounded-md bg-yellow-500 text-stone-50 hover:bg-yellow-600'
                                onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button onClick={handleSave}
                                className='px-6 py-2 rounded-md bg-blue-700 text-blue-50 hover:bg-blue-900'>Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type='text' label='Title' ref={titleRef}/>
                    <Input label='Description' isTextArea ref={descriptionRef}/>
                    <Input type='date' label='Due Date' ref={dueDateRef}/>
                </div>

            </div>
        </>
    )
}
