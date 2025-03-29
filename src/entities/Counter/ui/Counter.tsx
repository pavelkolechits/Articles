import { useDispatch, useSelector } from "react-redux"
import { counterActions, counterReducer } from "../model/slices/counterSlice"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { getCounterValue } from "../model/selectors/counterSelectors"




export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div style={{ width: '100px', height: '100px' }}>
            <h1>count = {counterValue}</h1>
            <button onClick={decrement}>decr</button>
            <button onClick={increment}>incr</button>
        </div>
    )
}