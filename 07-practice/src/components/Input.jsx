export default function Input({isTextArea,label,...props}) {
    return (
        <p>
            <label>{label}</label>
            {isTextArea ? <textarea {...props}></textarea> : <input {...props}/>}
        </p>
    )
}
