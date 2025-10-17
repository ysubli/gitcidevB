const { tasks } = require('../tasks');

function countDone() {
  return tasks.filter(t => t.done).length;
}

module.exports = countDone;
