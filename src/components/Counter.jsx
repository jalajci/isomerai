import React from 'react';
import { increment, decrement } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
    const counter = useSelector( state => state.counter);
    const isLogged = useSelector( state => state.isLogged);
    const dispatch = useDispatch(); 
    return(
        <div>
            {
                isLogged?
                <h1>Welcome User</h1>
                :<h1>Welcome Guest</h1>
            }
            <h3> Counter Value is : {counter}</h3>
            <button onClick = {()=> dispatch(increment())}>+</button>
            <button onClick = {()=> dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;