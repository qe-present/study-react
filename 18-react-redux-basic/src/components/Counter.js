import {useSelector,useDispatch} from "react-redux";
import {counterActions} from "../store/counter";
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);
    const dispatch = useDispatch();


    function incrementHandler() {
        dispatch(counterActions.increment());
    }
    function decrementHandler() {
        dispatch(counterActions.decrement());
    }
    function increaseHandler() {
        dispatch(counterActions.increase(5));
    }
    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };
    return (
     <main className={classes.counter}>
      <h1>Redux Counter</h1>
         {show&&<div className={classes.value}>{counter}</div>}
         <div>
             <button onClick={incrementHandler}>Increment</button>
             <button onClick={increaseHandler}>Increment by 5</button>
             <button onClick={decrementHandler}>Decrement</button>
         </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
     </main>
    );
};
export default Counter;
// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }
//     decrementHandler() {
//         this.props.decrement();
//     }
//     toggleCounterHandler() {
//         this.props.toggleCounter();
//     }
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'}),
//     };
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
