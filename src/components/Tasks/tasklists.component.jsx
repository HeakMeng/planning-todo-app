import React from "react";

function TaskLists({allTasks,handleDelete}){
  return(
    <div className="tasks-container">
      <div className="tasks-header">
        <h2 className="tasks-title">Your Tasks</h2>
      </div>
      {allTasks.length === 0 ? (
        <div className="no-tasks">No tasks yet. Add one above!</div>
      ) : (
        allTasks.map(({title, description, id}) => (
          <div key={id} className="task-item">
            <div className="task-content">
              <h3 className="task-title">{title}</h3>
              {description && <p className="task-description">{description}</p>}
            </div>
            <button className="btn-delete" onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  )
}

export default TaskLists;