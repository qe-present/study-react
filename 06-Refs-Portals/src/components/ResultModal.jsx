import {forwardRef,useImperativeHandle,useRef} from "react"
import {createPortal}  from 'react-dom'
const ResultModal = forwardRef(function ResultModal({ targetTime,remainingTime,onReset}, ref) {
    const modalRef = useRef()
    const useLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime/1000).toFixed(2)
    const score=Math.round ((1-remainingTime/(targetTime*1000))*100)
    useImperativeHandle(ref, () => ({
        show: () => {
            modalRef.current.showModal()
        },
        close: () => {
            ref.current.close()
        }
    }))
    return createPortal(
        <dialog className="result-modal" ref={modalRef}>
            {useLost && <h2>you lost!</h2>}
            {!useLost && <h2>you Scored {score}%!</h2>}
            <p>the target time was <strong>{targetTime} seconds</strong></p>
            <p>you stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultModal
