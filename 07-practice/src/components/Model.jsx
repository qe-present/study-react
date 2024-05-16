import {forwardRef, useImperativeHandle, useRef} from 'react'
import {createPortal} from 'react-dom'
import Button from "./Button.jsx";

export default forwardRef(function Model({children, buttonCaption}, ref) {
        let dialogRef = useRef();
        useImperativeHandle(ref, () => ({
            open: () => {
                dialogRef.current.showModal();
            }
        }))
        return createPortal(
            <dialog
                ref={dialogRef}
                className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'
            >
                {children}
                <form method="dialog" className='mt-4 text-right '>
                    <Button>{buttonCaption}</Button>
                </form>
            </dialog>,
            document.getElementById('modal-root')
        )
    }
)
