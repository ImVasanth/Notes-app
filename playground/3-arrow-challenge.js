const tasks = {
    tasks: [{
        text:'Grocery shopping',
        completed: true
    }, {
        text: 'Yard cleaning',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed===false)
        
    }
}
console.log(tasks.getTasksToDo())