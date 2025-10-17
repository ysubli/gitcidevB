// main pour tout rassembler et exporter
const addTask = require('./lib/AddTask');
const toggleTask = require('./lib/ToggleTask');
const countDone = require('./lib/Countdone');
const { tasks } = require('./lib/tasks');

module.exports = {
	addTask,
	toggleTask,
	countDone,
	tasks,
};

