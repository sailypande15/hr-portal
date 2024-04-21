import React from "react";

function ToDoList(toDoList){
    return(
        <div className="container">
        <h1 className="mt-5">To-Do List</h1>
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add new to-do item" id="todoInput"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="addTodo">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <ul className="list-group mt-4" id="todoList">
        <li list-group-item d-flex justify-content-between align-items-center>
            <h5>Complete Timesheet</h5>
            <p>Time sheet is pending for this week. Complete before friday</p>
        </li>
        <li list-group-item d-flex justify-content-between align-items-center>
            <h5>Mandatory Trainings</h5>
            <p>Time shMandatory Trainingsk. Complete before 30 April</p>
        </li>
        </ul>
    </div>
    );
}
export default ToDoList;