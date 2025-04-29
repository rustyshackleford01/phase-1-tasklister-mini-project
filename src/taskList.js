class TaskList {
    constructor() {
      this.tasks = [];
    }
  
    createNewTask(description) {
      const newTask = new Task(description);
      this.tasks.push(newTask);
    }
  
    renderTasks() {
      return this.tasks.map((task) => task.render()).join("");
    }
  
    deleteTask(description) {
      this.tasks = this.tasks.filter((task) => task.description !== description);
    }
  }
  
  class Task {
    constructor(description) {
      this.description = description;
    }
  
    render() {
      return `
        <li>
          ${this.description}
          <button data-description="${this.description}">X</button>
        </li>
        `;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Select all list items in the unordered list
    const tasks = document.querySelectorAll('#list');
  
    // Add a click event listener to each task
    tasks.forEach(task => {
      task.addEventListener('click', () => {
        // Toggle the 'important' class on the clicked task
        task.classList.toggle('important');
      });
    });
  });