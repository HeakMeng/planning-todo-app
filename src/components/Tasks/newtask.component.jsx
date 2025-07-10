import React from "react";

function NewTask({newTask,handleChange,handleSubmit}){
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Task Title</label>
        <input
          className="form-input"
          name="title"
          placeholder="Enter your task"
          value={newTask.title || ""}
          onChange={(e) => handleChange({name: e.target.name, value: e.target.value})}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea
          className="form-input"
          name="description"
          placeholder="Add details (optional)"
          value={newTask.description || ""}
          onChange={(e) => handleChange({name: e.target.name, value: e.target.value})}
          rows="3"
        />
      </div>
      <button className="btn-add" type="submit">Add Task</button>
    </form>
  );
}

export default NewTask;