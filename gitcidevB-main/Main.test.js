const { addTask, toggleTask, countDone, tasks } = require('./main');

beforeEach(() => { tasks.length = 0; });

test('basic add / toggle / count behavior (plus edge cases)', () => {
  // add et trim 
  expect(addTask('  task1  ')).toBe(true);
  expect(tasks.length).toBe(1);
  expect(tasks[0].name).toBe('task1');

  // compteur de noms
  expect(countDone()).toBe(0);

  // toggle works and affects count
  expect(toggleTask(0)).toBe(true);
  expect(countDone()).toBe(1);

  // toggle back
  expect(toggleTask(0)).toBe(true);
  expect(countDone()).toBe(0);

  // edge cases: empty name and invalid toggle index
  expect(addTask('   ')).toBe(false);
  expect(toggleTask(5)).toBe(false);
});