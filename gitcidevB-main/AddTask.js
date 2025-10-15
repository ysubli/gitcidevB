const { tasks } = require('./tasks');

function addTask(name) {
  if (!name || !name.trim()) return false;
  tasks.push({ name: name.trim(), done: false });
  return true;
}

module.exports = addTask;
module.exports = addTask;