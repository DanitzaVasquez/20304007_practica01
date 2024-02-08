const tasksRepository = require("./tasksRepository");

describe("pruebas", () => {

    // prueba unitaria
    test("Get all tasks", () => {
        // Arrange
        let tasks = [];

        // Act 
        tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(2);
        expect(tasks.length == 2).toBe(true);
        expect(Array.isArray(tasks)).toBe(true);
    });

    // prueba unitaria para crear una tarea
    test("Create a task", () => {
        // Arrange
        const newTask = { id: 3, title: "New Task", completed: false };

        // Act 
        tasksRepository.create(newTask);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(3);
        expect(tasks.find(task => task.id === 3)).toEqual(newTask);
    });

    // prueba unitaria para actualizar una tarea
    test("Update a task", () => {
        // Arrange
        const taskId = 1;
        const updatedTask = { id: 1, title: "Updated Task", completed: true };

        // Act 
        tasksRepository.update(taskId, updatedTask);
        const tasks = tasksRepository.getAll();

        // Assert
        const updatedTaskInList = tasks.find(task => task.id === 1);
        expect(updatedTaskInList).toEqual(updatedTask);
    });

    // prueba unitaria para eliminar una tarea
    test("Delete a task", () => {
        // Arrange
        const taskIdToDelete = 1;

        // Act 
        tasksRepository.delete(taskIdToDelete);
        const tasks = tasksRepository.getAll();

        // Assert
        expect(tasks.length).toBe(1);
        expect(tasks.find(task => task.id === 1)).toBeUndefined();
    });

});
