//React & useEffect Hook
import React, { useState } from "react";
//Redux useSelector and useState hooks
import { useSelector, useDispatch } from "react-redux";
//import Reducers from todosSlice
import {
  addTodo,
  editTodo,
  completeTodo,
  deleteTodo,
  selectTodos,
} from "../redux/todosSlice";

//local css
import "../styling/mainUi.css"

//Main Component
function MainUiComponent() {
  // Subscribe to the slice state.
  const inputValue = useSelector((state) => state.form.inputValue);

  // Store input value
  const [formInput, updateFormInput] = useState("");

  // Set dispatch
  const dispatch = useDispatch();

  // Handle input change and save it to a function using the event property and target and 
  //value thereof in the DO.
  const handleInputChange = (e) => {
    updateFormInput(e.target.value);
  };

  // Handle button click to add a new to-do item and to 
  //dispatch it to the store and then to the slice for updating.
  const handleAddTodo = () => {
    if (formInput) {
      dispatch(addTodo(formInput));
      updateFormInput(""); // Clear the input field
    }
  };

  // Handle button click to edit a to-do item
  const handleEditTodo = (todoId, content) => {
    const updatedContent = prompt("Enter updated content:", content);
    if (updatedContent !== null) {
      dispatch(editTodo({ id: todoId, content: updatedContent }));
    }
  };

  // Handle button click to complete a to-do item
  const handleCompleteTodo = (todoId) => {
    dispatch(completeTodo(todoId));
  };

  // Handle button click to delete a to-do item
  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  // Select todos from the store
  const todos = useSelector(selectTodos);

  // JSX
  return (
    <div>
        {/*Input form */}
      <div className="input-field">
        <input
          type="text"
          value={formInput}
          //Calls the function and dispatched the payload.
          onChange={handleInputChange}
        />
      </div>

      {/* //Calls the function and dispatched the payload. */}
      <button className="update-g-scope" onClick={handleAddTodo}>
        ADD TO LIST
      </button>

      <ol>
        <li>
          {/* Display updated form input state */}
          {inputValue}
        </li>
        {/* Map over todos and render each task. Thanks to open Ai for this solution. */}
        {Object.keys(todos).map((todoId) => (
          <li key={todoId}>
            {/* Apply completed-task class if task is completed */}
            <span className={todos[todoId].completed ? "completed-task" : ""}>
              {todos[todoId].content}
            </span>
            {/* Edit, Complete, and Delete buttons */}
            {/* //Calls the function and dispatched the payload. */}
            <button className="edit-button" onClick={() => handleEditTodo(todoId, todos[todoId].content)}>
              Edit
            </button>
              {/* //Calls the function and dispatched the payload. */}
            <button className="complete-button" onClick={() => handleCompleteTodo(todoId)}>
              Complete
            </button>
              {/* //Calls the function and dispatched the payload. */}
            <button className="delete-button" onClick={() => handleDeleteTodo(todoId)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MainUiComponent;
