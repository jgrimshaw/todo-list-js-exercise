// Use object to keep track of tasks
function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

const task1 = newTask('Clean the cat box.', 'Note: see it the cat is happier now...')
const task2 = newTask('Do laundry.', 'Note: do not forget it in the dryer again...')
const tasks = [task1, task2]
// DRIVER CODE BELOW
console.log(tasks)
