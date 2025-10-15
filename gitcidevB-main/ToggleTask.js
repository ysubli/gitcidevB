const { isNumberObject } = require('util/types');
function toggleTask(index) {
  const i = Number(index);
  if (!Number.isInteger(i) || i < 0 || i >= tasks.length) return false;
  tasks[i].done = !tasks[i].done;
  return true;
}

module.exports = toggleTask;