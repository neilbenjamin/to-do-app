import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plus } from "../redux/testCount";

function Count (){

//subscribe to the slice state.
const count = useSelector((state) => state.count.value);
// Set dispatch
const dispatch = useDispatch();

//Assign slice value to variable for use in JSX.
const showValue = count;
;

//JSX
return (
    <div>
<h2>{showValue}TEST</h2>
<h3>TESTING</h3>
<button onClick={() => dispatch(plus())}>ADD</button>
</div>
)


}


export default Count;