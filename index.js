// Use object to keep track of tasks
function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

// print task details
function logTaskState(task){
  console.log(`${task.title} has ${task.complete ? '': 'not '}been completed.`);
}

// mark it complete
function completeTask(task){
  task.complete = true;
}

const task1 = newTask('Clean the cat box.', 'Note: see it the cat is happier now...')
const task2 = newTask('Do laundry.', 'Note: do not forget it in the dryer again...')
const tasks = [task1, task2]

// DRIVER CODE BELOW
logTaskState(task1);
completeTask(task1);
logTaskState(task1);

console.log(tasks);
