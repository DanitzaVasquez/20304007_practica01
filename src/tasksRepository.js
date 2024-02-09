let tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ];
  
  function getAll() {
    return tasks;
  }
  
  function create(newTask) {
    tasks.push(newTask);
  }
  
  function update(taskId, updatedTask) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      tasks[index] = updatedTask;
    }
  }
  
  function deleteTask(taskId) {
    console.log("Tasks before deletion:", tasks);
  
    tasks = tasks.filter(task => task.id !== taskId);
  
    console.log("Tasks after deletion:", tasks);
  }
  
  module.exports = {
    getAll,
    create,
    update,
    delete: deleteTask,
  };