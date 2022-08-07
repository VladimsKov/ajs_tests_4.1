import sum, { warriorHealth } from '../basic';

// homework

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('warriors healthy', () => {
  const healthResult = warriorHealth({ name: 'маг', health: 90 });
  expect(healthResult).toBe('healthy');
});

test('warriors wounded', () => {
  const healthResult = warriorHealth({ name: 'воин', health: 30 });
  expect(healthResult).toBe('wounded');
});

test('warriors critical', () => {
  const healthResult = warriorHealth({ name: 'гном', health: 10 });
  expect(healthResult).toBe('critical');
});
